
let taller= ''

for (let i = 0; i < 10 ; i++) {
    const  nombre = faker.name.findName() 
    const  pais = faker.address.country()
    const profesion = faker.name.jobTitle()
    const direccion = faker.address.direction()
    const telefono = faker.phone.phoneNumber()
    const email = faker.internet.email()
    const salario = faker.finance.account()
    var edad = []
    
    for (let i = 0; i < 1; i++) {
        edad[i] = parseInt(Math.random()* 100);
    }

    taller += (`{ "nombre": "${nombre}", "pais": "${pais}" , "profesion": "${profesion}", "direccion": "${direccion}", "telefono": "${telefono}", "email": "${email}", "aspiracion salarial": "${salario}", "edad": "${edad}" },`)
}

console.log(taller)


/* resultado registros de mongoDB
 
> db.resultados.insertMany([{ "nombre": "Madeline Howell", "pais": "Algeria" , "profesion": "Chief Identity Designer", "direccion": "East", "telefono": "1-816-641-5698 x3096", "email": "Madisyn_Blanda85@gmail.com", "aspiracion salarial": "84883399", "edad": "33" },{ "nombre": "Clyde Hagenes", "pais": "Kazakhstan" , "profesion": "Dynamic Brand Assistant", "direccion": "North", "telefono": "1-341-530-8319 x45617", "email": "Jamar43@yahoo.com", "aspiracion salarial": "96412454", "edad": "68" },{ "nombre": "Lynn Sawayn V", "pais": "Japan" , "profesion": "Corporate Interactions Executive", "direccion": "Northeast", "telefono": "(368) 257-3885 x560", "email": "Andrew14@gmail.com", "aspiracion salarial": "12363006", "edad": "99" },{ "nombre": "Monica Herzog", "pais": "Bahrain" , "profesion": "District Directives Technician", "direccion": "West", "telefono": "838.418.4044 x76002", "email": "Jan_Daugherty@yahoo.com", "aspiracion salarial": "78252434", "edad": "24" },{ "nombre": "Jody Schaden", "pais": "Liberia" , "profesion": "Product Assurance Representative", "direccion": "North", "telefono": "1-811-903-5052 x58243", "email": "Derek_Sanford25@hotmail.com", "aspiracion salarial": "51032200", "edad": "55" },{ "nombre": "Vicki Beer", "pais": "France" , "profesion": "Direct Directives Strategist", "direccion": "Southwest", "telefono": "553.799.0850", "email": "Annamae.Rutherford@yahoo.com", "aspiracion salarial": "88221887", "edad": "27" },{ "nombre": "Madeline Kirlin", "pais": "Puerto Rico" , "profesion": "Principal Infrastructure Facilitator", "direccion": "Northwest", "telefono": "254.548.1328", "email": "Tressa.Tillman@yahoo.com", "aspiracion salarial": "15537640", "edad": "30" },{ "nombre": "Mrs. Kristy Erdman", "pais": "San Marino" , "profesion": "Direct Usability Analyst", "direccion": "Northwest", "telefono": "1-930-346-8037 x41695", "email": "Tracy.Bauch@yahoo.com", "aspiracion salarial": "04708023", "edad": "39" },{ "nombre": "Christina Ziemann", "pais": "Martinique" , "profesion": "Corporate Metrics Facilitator", "direccion": "Southeast", "telefono": "1-925-902-4648 x3010", "email": "Olaf.Von@yahoo.com", "aspiracion salarial": "26311016", "edad": "11" },{ "nombre": "Whitney Bogan", "pais": "Gabon" , "profesion": "Lead Brand Developer", "direccion": "Southwest", "telefono": "1-758-490-4912", "email": "Royce73@yahoo.com", "aspiracion salarial": "06232949", "edad": "46" } ])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5f9a29b5f0262cd2aa1ac5ce"),
                ObjectId("5f9a29b5f0262cd2aa1ac5cf"),
                ObjectId("5f9a29b5f0262cd2aa1ac5d0"),
                ObjectId("5f9a29b5f0262cd2aa1ac5d1"),
                ObjectId("5f9a29b5f0262cd2aa1ac5d2"),
                ObjectId("5f9a29b5f0262cd2aa1ac5d3"),
                ObjectId("5f9a29b5f0262cd2aa1ac5d4"),
                ObjectId("5f9a29b5f0262cd2aa1ac5d5"),
                ObjectId("5f9a29b5f0262cd2aa1ac5d6"),
                ObjectId("5f9a29b5f0262cd2aa1ac5d7")
        ]
}
> db.resultados.insertMany([ { "nombre": "Flora Nikolaus", "pais": "Tonga" , "profesion": "Legacy Mobility Liaison", "direccion": "South", "telefono": "1-316-982-3260", "email": "Gordon52@yahoo.com", "aspiracion salarial": "96689378", "edad": "51" },{ "nombre": "Rosemarie Kiehn", "pais": "Eritrea" , "profesion": "Corporate Metrics Planner", "direccion": "Southwest", "telefono": "707-729-5750", "email": "Rhiannon_Bradtke19@yahoo.com", "aspiracion salarial": "41979995", "edad": "97" },{ "nombre": "Irma Weber", "pais": "British Indian Ocean Territory (Chagos Archipelago)" , "profesion": "Principal Research Administrator", "direccion": "South", "telefono": "553-516-7716 x823", "email": "Jaleel_Baumbach@gmail.com", "aspiracion salarial": "04326824", "edad": "70" },{ "nombre": "Abel Ward", "pais": "Bouvet Island (Bouvetoya)" , "profesion": "Global Marketing Technician", "direccion": "North", "telefono": "348-963-6835 x3535", "email": "Kayla.Dicki65@yahoo.com", "aspiracion salarial": "56786643", "edad": "19" },{ "nombre": "Jamie Wuckert", "pais": "Libyan Arab Jamahiriya" , "profesion": "Product Assurance Architect", "direccion": "Northeast", "telefono": "(781) 257-6859 x327", "email": "Tressie.Gleichner3@yahoo.com", "aspiracion salarial": "52701590", "edad": "68" },{ "nombre": "Luis Pollich", "pais": "Argentina" , "profesion": "Customer Configuration Supervisor", "direccion": "West", "telefono": "675-424-6613", "email": "Dayton_Schultz77@hotmail.com", "aspiracion salarial": "11286468", "edad": "77" },{ "nombre": "Amos Kemmer IV", "pais": "Norway" , "profesion": "Regional Configuration Consultant", "direccion": "Northwest", "telefono": "934.481.7523 x76589", "email": "Jarrell7@hotmail.com", "aspiracion salarial": "43826449", "edad": "18" },{ "nombre": "Bert Morar III", "pais": "Maldives" , "profesion": "Central Factors Producer", "direccion": "Southwest", "telefono": "703-967-3670 x631", "email": "Lizeth.Kirlin23@hotmail.com", "aspiracion salarial": "24855212", "edad": "28" },{ "nombre": "Tricia Gleichner", "pais": "Ecuador" , "profesion": "Internal Operations Liaison", "direccion": "Northeast", "telefono": "208.691.3601", "email": "Haylee2@hotmail.com", "aspiracion salarial": "07181107", "edad": "91" },{ "nombre": "Amy Simonis", "pais": "Haiti" , "profesion": "International Assurance Facilitator", "direccion": "North", "telefono": "501.331.3030", "email": "Brendon45@gmail.com", "aspiracion salarial": "72124386", "edad": "64" }  ])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5f9a29f8f0262cd2aa1ac5d8"),
                ObjectId("5f9a29f8f0262cd2aa1ac5d9"),
                ObjectId("5f9a29f8f0262cd2aa1ac5da"),
                ObjectId("5f9a29f8f0262cd2aa1ac5db"),
                ObjectId("5f9a29f8f0262cd2aa1ac5dc"),
                ObjectId("5f9a29f8f0262cd2aa1ac5dd"),
                ObjectId("5f9a29f8f0262cd2aa1ac5de"),
                ObjectId("5f9a29f8f0262cd2aa1ac5df"),
                ObjectId("5f9a29f8f0262cd2aa1ac5e0"),
                ObjectId("5f9a29f8f0262cd2aa1ac5e1")
        ]
}

> db.resultados.find().pretty()
{
        "_id" : ObjectId("5f9a29b5f0262cd2aa1ac5ce"),
        "nombre" : "Madeline Howell",
        "pais" : "Algeria",
        "profesion" : "Chief Identity Designer",
        "direccion" : "East",
        "telefono" : "1-816-641-5698 x3096",
        "email" : "Madisyn_Blanda85@gmail.com",
        "aspiracion salarial" : "84883399",
        "edad" : "33"
}
{
        "_id" : ObjectId("5f9a29b5f0262cd2aa1ac5cf"),
        "nombre" : "Clyde Hagenes",
        "pais" : "Kazakhstan",
        "profesion" : "Dynamic Brand Assistant",
        "direccion" : "North",
        "telefono" : "1-341-530-8319 x45617",
        "email" : "Jamar43@yahoo.com",
        "aspiracion salarial" : "96412454",
        "edad" : "68"
}
{
        "_id" : ObjectId("5f9a29b5f0262cd2aa1ac5d0"),
        "nombre" : "Lynn Sawayn V",
        "pais" : "Japan",
        "profesion" : "Corporate Interactions Executive",
        "direccion" : "Northeast",
        "telefono" : "(368) 257-3885 x560",
        "email" : "Andrew14@gmail.com",
        "aspiracion salarial" : "12363006",
        "edad" : "99"
}
{
        "_id" : ObjectId("5f9a29b5f0262cd2aa1ac5d1"),
        "nombre" : "Monica Herzog",
        "pais" : "Bahrain",
        "profesion" : "District Directives Technician",
        "direccion" : "West",
        "telefono" : "838.418.4044 x76002",
        "email" : "Jan_Daugherty@yahoo.com",
        "aspiracion salarial" : "78252434",
        "edad" : "24"
}
{
        "_id" : ObjectId("5f9a29b5f0262cd2aa1ac5d2"),
        "nombre" : "Jody Schaden",
        "pais" : "Liberia",
        "profesion" : "Product Assurance Representative",
        "direccion" : "North",
        "telefono" : "1-811-903-5052 x58243",
        "email" : "Derek_Sanford25@hotmail.com",
        "aspiracion salarial" : "51032200",
        "edad" : "55"
}
{
        "_id" : ObjectId("5f9a29b5f0262cd2aa1ac5d3"),
        "nombre" : "Vicki Beer",
        "pais" : "France",
        "profesion" : "Direct Directives Strategist",
        "direccion" : "Southwest",
        "telefono" : "553.799.0850",
        "email" : "Annamae.Rutherford@yahoo.com",
        "aspiracion salarial" : "88221887",
        "edad" : "27"
}
{
        "_id" : ObjectId("5f9a29b5f0262cd2aa1ac5d4"),
        "nombre" : "Madeline Kirlin",
        "pais" : "Puerto Rico",
        "profesion" : "Principal Infrastructure Facilitator",
        "direccion" : "Northwest",
        "telefono" : "254.548.1328",
        "email" : "Tressa.Tillman@yahoo.com",
        "aspiracion salarial" : "15537640",
        "edad" : "30"
}
{
        "_id" : ObjectId("5f9a29b5f0262cd2aa1ac5d5"),
        "nombre" : "Mrs. Kristy Erdman",
        "pais" : "San Marino",
        "profesion" : "Direct Usability Analyst",
        "direccion" : "Northwest",
        "telefono" : "1-930-346-8037 x41695",
        "email" : "Tracy.Bauch@yahoo.com",
        "aspiracion salarial" : "04708023",
        "edad" : "39"
}
{
        "_id" : ObjectId("5f9a29b5f0262cd2aa1ac5d6"),
        "nombre" : "Christina Ziemann",
        "pais" : "Martinique",
        "profesion" : "Corporate Metrics Facilitator",
        "direccion" : "Southeast",
        "telefono" : "1-925-902-4648 x3010",
        "email" : "Olaf.Von@yahoo.com",
        "aspiracion salarial" : "26311016",
        "edad" : "11"
}
{
        "_id" : ObjectId("5f9a29b5f0262cd2aa1ac5d7"),
        "nombre" : "Whitney Bogan",
        "pais" : "Gabon",
        "profesion" : "Lead Brand Developer",
        "direccion" : "Southwest",
        "telefono" : "1-758-490-4912",
        "email" : "Royce73@yahoo.com",
        "aspiracion salarial" : "06232949",
        "edad" : "46"
}
{
        "_id" : ObjectId("5f9a29f8f0262cd2aa1ac5d8"),
        "nombre" : "Flora Nikolaus",
        "pais" : "Tonga",
        "profesion" : "Legacy Mobility Liaison",
        "direccion" : "South",
        "telefono" : "1-316-982-3260",
        "email" : "Gordon52@yahoo.com",
        "aspiracion salarial" : "96689378",
        "edad" : "51"
}
{
        "_id" : ObjectId("5f9a29f8f0262cd2aa1ac5d9"),
        "nombre" : "Rosemarie Kiehn",
        "pais" : "Eritrea",
        "profesion" : "Corporate Metrics Planner",
        "direccion" : "Southwest",
        "telefono" : "707-729-5750",
        "email" : "Rhiannon_Bradtke19@yahoo.com",
        "aspiracion salarial" : "41979995",
        "edad" : "97"
}
{
        "_id" : ObjectId("5f9a29f8f0262cd2aa1ac5da"),
        "nombre" : "Irma Weber",
        "pais" : "British Indian Ocean Territory (Chagos Archipelago)",
        "profesion" : "Principal Research Administrator",
        "direccion" : "South",
        "telefono" : "553-516-7716 x823",
        "email" : "Jaleel_Baumbach@gmail.com",
        "aspiracion salarial" : "04326824",
        "edad" : "70"
}
{
        "_id" : ObjectId("5f9a29f8f0262cd2aa1ac5db"),
        "nombre" : "Abel Ward",
        "pais" : "Bouvet Island (Bouvetoya)",
        "profesion" : "Global Marketing Technician",
        "direccion" : "North",
        "telefono" : "348-963-6835 x3535",
        "email" : "Kayla.Dicki65@yahoo.com",
        "aspiracion salarial" : "56786643",
        "edad" : "19"
}
{
        "_id" : ObjectId("5f9a29f8f0262cd2aa1ac5dc"),
        "nombre" : "Jamie Wuckert",
        "pais" : "Libyan Arab Jamahiriya",
        "profesion" : "Product Assurance Architect",
        "direccion" : "Northeast",
        "telefono" : "(781) 257-6859 x327",
        "email" : "Tressie.Gleichner3@yahoo.com",
        "aspiracion salarial" : "52701590",
        "edad" : "68"
}
{
        "_id" : ObjectId("5f9a29f8f0262cd2aa1ac5dd"),
        "nombre" : "Luis Pollich",
        "pais" : "Argentina",
        "profesion" : "Customer Configuration Supervisor",
        "direccion" : "West",
        "telefono" : "675-424-6613",
        "email" : "Dayton_Schultz77@hotmail.com",
        "aspiracion salarial" : "11286468",
        "edad" : "77"
}
{
        "_id" : ObjectId("5f9a29f8f0262cd2aa1ac5de"),
        "nombre" : "Amos Kemmer IV",
        "pais" : "Norway",
        "profesion" : "Regional Configuration Consultant",
        "direccion" : "Northwest",
        "telefono" : "934.481.7523 x76589",
        "email" : "Jarrell7@hotmail.com",
        "aspiracion salarial" : "43826449",
        "edad" : "18"
}
{
        "_id" : ObjectId("5f9a29f8f0262cd2aa1ac5df"),
        "nombre" : "Bert Morar III",
        "pais" : "Maldives",
        "profesion" : "Central Factors Producer",
        "direccion" : "Southwest",
        "telefono" : "703-967-3670 x631",
        "email" : "Lizeth.Kirlin23@hotmail.com",
        "aspiracion salarial" : "24855212",
        "edad" : "28"
}
{
        "_id" : ObjectId("5f9a29f8f0262cd2aa1ac5e0"),
        "nombre" : "Tricia Gleichner",
        "pais" : "Ecuador",
        "profesion" : "Internal Operations Liaison",
        "direccion" : "Northeast",
        "telefono" : "208.691.3601",
        "email" : "Haylee2@hotmail.com",
        "aspiracion salarial" : "07181107",
        "edad" : "91"
}
{
        "_id" : ObjectId("5f9a29f8f0262cd2aa1ac5e1"),
        "nombre" : "Amy Simonis",
        "pais" : "Haiti",
        "profesion" : "International Assurance Facilitator",
        "direccion" : "North",
        "telefono" : "501.331.3030",
        "email" : "Brendon45@gmail.com",
        "aspiracion salarial" : "72124386",
        "edad" : "64"
}

*/

/* 
CONSULTAS:

3. Aumento salarial de las personas que vivan en Ecuador
Comando:

> db.resultados.updateMany({"pais":"Ecuador" },{ $inc:{"aspiracion salarial":5000000}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

> db.resultados.find({"pais":"Ecuador"})
{ "_id" : ObjectId("5f9a29f8f0262cd2aa1ac5e0"), "nombre" : "Tricia Gleichner", "pais" : "Ecuador", "profesion" : "Internal Operations Liaison", "direccion" : "Northeast", "telefono" : "208.691.3601", "email" : "Haylee2@hotmail.com", "aspiracion salarial" : 12181107, "edad" : "91" }

> db.resultados.find({"pais":"Ecuador"}).pretty()
{
        "_id" : ObjectId("5f9a29f8f0262cd2aa1ac5e0"),
        "nombre" : "Tricia Gleichner",
        "pais" : "Ecuador",
        "profesion" : "Internal Operations Liaison",
        "direccion" : "Northeast",
        "telefono" : "208.691.3601",
        "email" : "Haylee2@hotmail.com",
        "aspiracion salarial" : 12181107,
        "edad" : "91"
}

4. Eliminacion de personas que tengan menos de 18 años
Comando:

> db.resultados.find({"edad":{$lt:"18"}})
{ "_id" : ObjectId("5f9a29b5f0262cd2aa1ac5d6"), "nombre" : "Christina Ziemann", "pais" : "Martinique", "profesion" : "Corporate Metrics Facilitator", "direccion" : "Southeast", "telefono" : "1-925-902-4648 x3010", "email" : "Olaf.Von@yahoo.com", "aspiracion salarial" : "26311016", "edad" : "11" }

> db.resultados.deleteMany({"edad":{$lt:"18"}})
{ "acknowledged" : true, "deletedCount" : 1 }

> db.resultados.find({"edad":{$lt:"18"}})

> db.resultados.find().length()
19

*/
