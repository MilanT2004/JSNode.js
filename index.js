import status  from './status.js'
import http from 'http'


const server = http.createServer((req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin' , '*');
    res.setHeader('Access-Control-Allow-Methods' , 'GET, PUT, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers' , 'Content-Type');
    res.setHeader('Content-Type' , 'application/json');
    //res.end();
    if (req.method === 'OPTIONS') {
        // Handle preflight requests
        res.writeHead(200);
        res.end();
        return;
        
        }
    if (req.method=== 'GET') {
        if(req.url==='/red'){
            red: status.red;
           return res.end(JSON.stringify({red: status.red}));
        }
        else if (req.url === '/blue') {
            blue: status.blue;
            res.statusCode=200;
          return  res.end(JSON.stringify({blue: status.blues}));
        }
        else if(req.url === status){
            res.statusCode=200;
            return res.end(JSON.stringify({status}));
            
        }
        else{
            res.status= 404;
           return res.end(JSON.stringify({status}));

        }
        
    }
    if (req.method === 'PUT') {
        if(req.url ==='/red'){
            status.red++;
            res.statusCode = 200;
            return res.end(JSON.stringify({red: status.red}));
        }
        else if (req.url ==='/blue') {
           blue: status.blue++;
           res.statusCode = 200;
            return res.end(JSON.stringify({blue: status.blue}));
        }
        else if(req.url === '/status'){
            res.statusCode=200;
            return res.end(JSON.stringify({status}));
        }
        else{
            res.status= 404;
            return res.end(JSON.stringify({status}));

        }
        
    }

        
    
})
server.listen(3000, () => {
    console.log('Listining to requests on http://localhost:3000')
})
/*

De OPTIONS-methode is een HTTP-methode die wordt gebruikt voor preflight-requests in het kader van het Cross-Origin Resource Sharing (CORS)-mechanisme. CORS is een beveiligingsmechanisme dat wordt toegepast in moderne webbrowsers om te voorkomen dat webpagina's ongeoorloofde toegang krijgen tot bronnen op een ander domein.

Wanneer een webpagina een verzoek doet naar een bron (zoals een API-endpoint) op een ander domein, voert de browser automatisch een preflight- request uit om te controleren of het verzoek is toegestaan. Deze preflight-request wordt verzonden met behulp van de OPTIONS-methode.

De preflight-request bevat extra headers, zoals de "Origin" header (om het domein van de oorspronkelijke pagina aan te geven) en de "Access-Control-Request-Method" header (om aan te geven welke HTTP-methode zal worden gebruikt voor het uiteindelijke verzoek).

Het serverendomein ontvangt de preflight-request en kan controleren of het oorspronkelijke verzoek wordt geaccepteerd. De server reageert met een set headers, waaronder de "Access-Control-Allow-Origin" header (om aan te geven welke domeinen toegang hebben tot de bron) en de "Access-Control-Allow-Methods" header (om aan te geven welke HTTP-methoden zijn toegestaan voor het oorspronkelijke verzoek).

Als de server aangeeft dat het oorspronkelijke verzoek is toegestaan, kan de browser het daadwerkelijke verzoek verzenden. Anders zal de browser de toegang tot de bron blokkeren vanwege de beveiligingsmaatregelen van CORS.

Kort samengevat is de OPTIONS-methode een mechanisme binnen CORS dat wordt gebruikt om toestemming te verkrijgen en de juiste configuratie tussen een oorspronkelijke pagina en een serverdomein mogelijk te maken.

*/
