import type { VercelRequest, VercelResponse } from '@vercel/node';

const EMAIL=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export default async function handler(req:VercelRequest,res:VercelResponse){
  if(req.method!=='POST') return res.status(405).json({message:'Metodo non consentito.'});
  const {email,name='',consent,website=''}=req.body??{};
  if(website) return res.status(200).json({ok:true});
  if(consent!=='on' || typeof email!=='string' || email.length>254 || !EMAIL.test(email)) return res.status(400).json({message:'Verifica email e consenso privacy.'});
  if(typeof name!=='string' || name.length>80) return res.status(400).json({message:'Nome non valido.'});
  const apiKey=process.env.BREVO_API_KEY; const listId=Number(process.env.BREVO_LIST_ID); const templateId=Number(process.env.BREVO_DOI_TEMPLATE_ID); const redirectionUrl=process.env.BREVO_REDIRECT_URL;
  if(!apiKey || !listId || !templateId || !redirectionUrl) return res.status(500).json({message:'Servizio newsletter non configurato.'});
  try{
    const response=await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation',{method:'POST',headers:{accept:'application/json','content-type':'application/json','api-key':apiKey},body:JSON.stringify({email:email.trim().toLowerCase(),attributes:name.trim()?{FNAME:name.trim()}:undefined,includeListIds:[listId],templateId,redirectionUrl})});
    if(!response.ok){console.error('Brevo DOI error',response.status,await response.text());return res.status(502).json({message:'Iscrizione temporaneamente non disponibile.'});}
    return res.status(201).json({ok:true});
  }catch(error){console.error(error);return res.status(502).json({message:'Iscrizione temporaneamente non disponibile.'});}
}
