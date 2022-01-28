// ALL MONGO-DB DATABASE COMMANDS IMPORTANT

// #1.MONGO_SHELL

// TO ENTER INTO MONGO SHELL
 
> MONGO;


// TO SHOW ALL LIST OF DATABASES

> SHOW DBS; // SHOW DATABASES;


// TO CREATE A DATABASE OR USE DATABASE OR SWITCH DATABASE

> USE ECOM(DATABASE_NAME);


// TO SEE ACTIVE DATABASE

> DB;


// TO CREATE A COLLECTION

> DB.CREATECOLLECTION('NAME');


// INSIDE COLLECTION IN DATABASE

> SHOW COLLECTIONS;


// TO DELET THE DATABASE COLLECTION

>  DB.PRODUCTS(COLLECTION_NAME).DROP


// TO DELET COMPLETE DATABASE

> DB.DROPDATABASE();


// TO INSERT DATA INTO COLLECTIONS

> DB.PRODUCTS(COLLECTION_NAME).INSERTONE(
     {NAME : 'KEYBOARD', PRICE : 250 } )

        // FOR MANY

> DB.PRODUCTS.INSERTMANY([{ NAME : 'MOUSE', PRICE : 20},
    {NAME : 'TABLE',PRICE : 400  } ])


// TO SEE THE DATA INSIDE COLLECTIONS

> DB.PRODUCTS(COLLECTION_NAME).FIND();

        // FILTERS

> DB.PRODUCTS(COLLECTION_NAME).FIND({ PRICE : 250 });

        // FOR ONE 

> DB.PRODUCTS(COLLECTION_NAME).FINDONE({ PRICE : 250 });

        // FOR PRETTY

> DB.PRODUCTS(COLLECTION_NAME).FINDONE({ PRICE : 250 }).PRETTY();

// TO UPDATE DATA IN THE COLLECTIONS

> DB.PRODUCTS.UPDATE({ _id : ObjectId("61ddadef856feede68495726")},
        {$SET : {Name : 'TV' } })


// TO DELET THE DOCUMENT ONE

> DB.PRODUCTS.DELETEONE({ _id :  ObjectId("61ddb0d6856feede6849572a")})


// TO DELET MANY DOCUMENTS

> DB.PRODUCTS.DELETEMANY({ _id : {$in : [ObjectId("61ddb0d6856feede68495729"), 
                        ObjectId("61ddadef856feede68495726")] }  })


// TO KEEP REALATED DATA IN ONE TO ANOTHER COLLECTION BUT NOT RECO. IN MONGODB , KEEP IN ONE

> DB.REVIEWS.INSERTMANY([{text : 'Product is Good', stars : 4, productId : ObjectId("61ddad38856feede68495725")},
         {text : 'Product is Good', stars : 2, productId : ObjectId("61ddad38856feede68495725")}])


//  IN SAME COLLECTION RECOMENDED

> DB.PRODUCTS.UPDATE({_id : ObjectId("61ddad38856feede68495725")},
                         {$set : {reviews : [{text : 'All Good',starts : 4 },
                          {text : 'This is Bad Products', stars : 2}] } })



// IN MONGO DB THEIR IS NO RESTRICTION / NO SHCHEMA

> DB.PRODUCTS.INSERTONE({name : 'KeyBoard', category : 'Computer'})


// #2.OPERATOR


// TO USE EQUAL TO OPERATOR

> DB.PRODUCTS.FIND( {name: {$eq : 'KeyBoard'}})

// TO USE GREATE THAN

> DB.PRODUCTS.FIND({Price : {$gt : 6 } })

// TO USE GREATER THAN EQUAL TO

> DB.PRODUCTS.FIND({Price : {$gte : 5 } })

// TO USE IN OPERATOR

DB.PRODUCTS.DELETEMANY({ _id : {$in : [ObjectId("61ddb0d6856feede68495729"), 
                        ObjectId("61ddadef856feede68495726")] }  })


// TO USE LESS THAN

> DB.PRODUCTS.FIND({Price : {$lt : 6 } })

// TO USE LESS THAN AND EQUAL TO

> DB.PRODUCTS.FIND({Price : {$lt : 10 } })

// TO USE NOT EQUAL TO

> DB.PRODUCTS.FIND({Price : {$nt : 10 } })

// TO USE AND OPERATOR (BOTH TRUE OR FALSE)

> DB.PRODUCTS.FIND({$and : [{Price : {$eq : 10}}, {name : {$eq : 'pen'}} ] })


// TO USE OR OPERTOR (ONLY ONE TRUE OR FALSE)

> DB.PRODUCTS.FIND({$or : [{Price : {$eq : 10}}, {name : {$eq : 'Usb'}} ] })


// #3.INDEXES

// FOR LOOP IN DATABASE TO INCLIDE 5000 RECORS

> FOR(let i=1;  i<5000;  i++) {
        ... db.Products.insert({name : 'product' + i , Price : i })
        ... }


// TO SEE HOW MUCH TIME TAKEN BY QUERY TO RUN

> DB.PRODUCTS.FIND({name : 'product2000'}).explain('executionStats')


// TO CREATE INDEXES 

> DB.PRODUCTS.createIndex({name : 1})

// HOW TO GET INDEXES ACTIVE ON WHICH

> DB.PRODUCTS.getIndexes()

// TO DROP INDEXES

> DB.PRODUCTS.dropIndex('name_1')

// USING ID ONLT FEW MILLISECONS IT TAKE IN MONGODB

> db.Products.find({_id : ObjectId("61e0f7f748d7024e2ffc48d8")}).explain(executionStats)


// #4. ENABLE AUTH CONTROL

// TO CREATE THE USER IN MONGO DB

> use admin
switched to db admin

> db.createUser(
... ... {
... ...   user : 'superAdmin',
... ...   pwd  : passwordPrompt(),
...       roles : [
...                { role : 'userAdminAnyDatabase', db : 'admin'},
...                 'readWriteAnyDatabase'
...                ]
... }
... )

> Enter Password : 12345


// LOCATE /BIN AND MONGOD.CFG PASTE AND SAVE IT

> security:
authorization: "enabled"

// ENTER THE COMMAND IN THE CMD

> C:\Users\Jay Waghode>mongo --port 27017 --authenticationDatabase  "admin" -u "superAdmin" -p
> Enter password: 


// TO CREATE A NEW USER AND GIVE PERMISION ECOM

> DB.CREATEUSER(
        ... {
        ... user : 'ecomUser',
        ... pwd : passwordPrompt(),
        ... roles : [
        ...           {
        ...            role : 'readWrite', db : 'ecom'
        ...           },
        ...             {
        ...               role : 'read', db : 'pizza'
        ...             }
        ...          ]
        ...        }
        ...     )


> Enter Password : 123


// ECOM USER LOGIN

> mongo --port 27017 --authenticationDatabase  "ecom" -u "ecomUser" -p

> Enter Password : 123

// TO SEE WHICH USER LOGIN

> DB.RUNCOMMAND({CONNCECTIONSTATUS : 1})



