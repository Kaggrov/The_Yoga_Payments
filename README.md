## Note :- Adding user to database takes sometimes upto 15 seconds .

# Features Implemented :-
## User can fill the application form and their details are stored in MongoDB database .
## User can select Payment method and click payment button
## As told in assignment , CompletePayment method I have not Implemented but to mimic it I am fetching current user details and using it as response .
## Showing response after payment as Transaction Summary .

# Approach :-
## Frontend built using ReactJS
## Users fill application form and submit details to mongoDB with Key as PhoneNo to search & read .
## If user is already regisetered then check for last start and wanted start date and if less than 30 then tell to come after .
## After this choose Payment method and continue
## Then get response as succesfull payment .

# Assumptions :-
## Implemented CompletePayment() as a post request and fetch , as given in assignment , not to implement it.

# Video Reference of Website :-
## Flow of web app



https://user-images.githubusercontent.com/85993894/206920503-b576abac-6bdb-448a-ad90-5e7b81118dc2.mp4



## When repeating user selects plan in less than 30 days



https://user-images.githubusercontent.com/85993894/206920508-d9c2eda2-4a97-40a7-8a92-2fe6e0ae43b5.mp4


## ER Diagram => We can add extra entity as Yoga_Class with attribute Fees and relation Enrolled_in But as fees is fixed therfore I used one entity only .

![WhatsApp Image 2022-12-12 at 00 04 33](https://user-images.githubusercontent.com/85993894/206922390-37d29ae7-9181-4880-a653-7c05f3702128.jpeg)

# MongoDB Queries used :-
## For storing :-
### const PersonalDetails = new user({  // user is schema model
                    "name":name,
                    "age" : age,
                    "phoneNo" : phoneNo,
                    "startDate" : startDate,
                    "batch" : batch
                })
        
                PersonalDetails.save()

## For Updation :- 
## user.updateOne({phoneNo:phoneNo},{$set:{startDate:to_update}})

## For Finding User :-
###  user.findOne({phoneNo:phoneNo})
