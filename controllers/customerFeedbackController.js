function init() {

    var surveyJSON ={
 completedHtml: "<p><h4>Thank you for completing customer feedback</h4>",
 pages: [
  {
   name: "Greetings",
   elements: [
    {
     type: "text",
     isRequired: true,
     name: "PrimaryPhone",
     title: {
     	"default":"Primary Phone",
     	"ta":"முதன்மை தொலைபேசி"
     },
     width: "10"
    },
    {
     type: "radiogroup",
     name: "checkPermission",
     width: "10",
     title:{
     "default":"I am calling from Vodafone, I would like to talk to you about Vodafone' new plan which suits for you",
     "ta":"சார், நான் வோடஃபோனில் இருந்து போன் செய்கிறேன்,நான் உங்களிடம் பேசலாமா?"
 	},
     isRequired: true,
     choices: [
      {
       value: "permission",
       text: {
       	"default":"Permission",
       	 "ta":"அனுமதி வழங்கப்பட்டது"
       }
      },
      {
       value: "denied",
       text: {
       	"default":"Denied",
       	 "ta":"அனுமதி வழங்கப்படவில்லை"
       }
      }
     ],
     colCount: 0
    },
    {
     type: "text",
     inputType: "datetime-local",
     name: "deniedCallbackDateTime",
     title:{
      "default":"May I know call back date and time?",
      "ta":"சார், நான் உங்களுக்கு எப்போ திரும்ப கூப்பிடலாங்க?"
  	},
     visible: false,
     visibleIf: "{checkPermission}='denied''",
     width: "10"
    },
    {
     type: "radiogroup",
     name: "exit",
     visible: false,
     visibleIf: "{checkPermission}='denied'",
     width: "10",
     title: "EXIT CALL?",
     choices: [
      {
       value: "yes",
       text: "YES"
      },
      {
       value: "no",
       text: "NO"
      }
     ],
     colCount: 0
    },
    {
     type: "panel",
     name: "NotInterestedReasons",
     elements: [
      {
       type: "radiogroup",
       name: "reasonForNotInterested",
       visible: false,
       visibleIf: "{exit}='yes' and {checkPermission}='denied'",
       title: "May I know the reason why you are not interested?",
       choices: [
        {
         value: "happyWithOtherNetwork",
         text: {
          default: "Happy with other Network",
          ta: "பிற நெட்வொர்க் கவரேஜ் மூலம் மகிழ்ச்சி"
         }
        },
        {
         value: "notHappyWithSuggestPlan",
         text: "Not happy with the suggested plan"
        },
        {
         value: "notReadyToPayDeposit",
         text: "Not ready to pay the Deposit"
        },
        {
         value: "abilityToMakePayment",
         text: "Ability to make payment"
        },
        {
         value: "happyWithCurrentNetworkRetentionPlan",
         text: "Happy with the current networks's retention plan"
        },
        {
         value: "companyLinkedConnection",
         text: "Company linked connections"
        },
        {
         value: "happyWithExistingNetworkOffer",
         text: "Happy with the existing network's offer"
        },
        {
         value: "happyWithPrepaid",
         text: "Happy with prepaid"
        },
        {
         value: "previousBadExpInPostpaid",
         text: "Previous bad experience in Postpaid"
        },
        {
         value: "others",
         text: "Others"
        }
       ],
       colCount: 2
      },
      {
       type: "multipletext",
       name: "residingLocationAndArea",
       visible: false,
       visibleIf: "{reasonForNotInterested}='happyWithOtherNetwork'",
       width: "10",
       title: "Can you tell me the location & area in which you are residing now ?",
       items: [
        {
         name: "location",
         title: "Location"
        },
        {
         name: "area",
         title: "Area"
        },
        {
         name: "city",
         title: "City"
        },
        {
         name: "zone",
         title: "Zone"
        },
        {
         name: "state",
         title: "State"
        }
       ],
       colCount: 2
      },
      {
       type: "radiogroup",
       name: "whatNetworkUsing",
       visible: false,
       visibleIf: "{reasonForNotInterested}='happyWithOtherNetwork'",
       width: "10",
       title: "May I know whether you are using 2G/3G/4G?",
       choices: [
        {
         value: "2g",
         text: "2G"
        },
        {
         value: "3g",
         text: "3G"
        },
        {
         value: "4g",
         text: "4G"
        }
       ],
       colCount: 0
      },
      {
       type: "text",
       name: "suggestedPlan",
       title: "Based on your usage we have suggested this plan, \nif you are not satisfied with this can we suggest some other plan?\nif yes need to explain some other plan",
       visible: false,
       visibleIf: "{reasonForNotInterested}='notHappyWithSuggestPlan'",
       width: "10"
      },
      {
       type: "text",
       name: "outOfCityLimit",
       title: "OCL - As your area is Out of City Limit, so Rs.______ is mandate ",
       visible: false,
       visibleIf: "{reasonForNotInterested}='notReadyToPayDeposit'",
       width: "10"
      },
      {
       type: "text",
       name: "bachelorDeposit",
       title: "If Bachelor - Bachelor deposit is mandate, by paying the deposit, the credit limit will be increased",
       visible: false,
       visibleIf: "{reasonForNotInterested}='notReadyToPayDeposit'",
       width: "10"
      },
      {
       type: "text",
       name: "affordableMonthlyBill",
       title: "May I know your affordability for your monthly bill?",
       visible: false,
       visibleIf: "{reasonForNotInterested}='abilityToMakePayment'",
       width: "10"
      },
      {
       type: "text",
       name: "usagePattern",
       title: "May I know your usage pattern - Voice, SMS & Data?, suggest the plan based on the usage",
       visible: false,
       visibleIf: "{reasonForNotInterested}='abilityToMakePayment'",
       width: "10"
      },
      {
       type: "text",
       name: "offerbyExistingNetwork",
       title: "What was the offer provided by existing network?",
       visible: false,
       visibleIf: "{reasonForNotInterested}='happyWithCurrentNetworkRetentionPlan'",
       width: "10"
      },
      {
       type: "text",
       name: "authPersonContactNumber",
       title: "Can I have your authorised Person's contact number to discuss about the Vodafone postpaid offers",
       visible: false,
       visibleIf: "{reasonForNotInterested}='companyLinkedConnection'",
       width: "10"
      },
      {
       type: "text",
       name: "interestedToTakeNewConnection",
       title: "Are you interested to take new postpaid connnection for your personal purpose?",
       visible: false,
       visibleIf: "{reasonForNotInterested}='happyWithCurrentNetworkRetentionPlan'",
       width: "10"
      },
      {
       type: "multipletext",
       name: "currentPlanAndNetwork",
       visible: false,
       visibleIf: "{reasonForNotInterested}='happyWithExistingNetworkOffer'",
       width: "10",
       title: "What is the current plan your are using and its network?",
       items: [
        {
         name: "currentPlan",
         title: "Current Plan"
        },
        {
         name: "currentNetwork",
         title: "Current Network"
        }
       ],
       colCount: 2
      },
      {
       type: "text",
       name: "rechargePerMonth",
       title: "How much you are spending per month for your recharge",
       visible: false,
       visibleIf: "{reasonForNotInterested}='happyWithPrepaid'",
       width: "10"
      },
      {
       type: "radiogroup",
       name: "amountIncludeVoiceAndData",
       visible: false,
       visibleIf: "{reasonForNotInterested}='happyWithPrepaid'",
       width: "10",
       title: "Is the amount inclusive of Voice & Data",
       choices: [
        {
         value: "yesq",
         text: "YES"
        },
        {
         value: "no",
         text: "NO"
        }
       ],
       colCount: 0
      },
      {
       type: "text",
       name: "postpaidBenefits",
       title: "If you have taken the postpaid connection you need not worry about the frequent recharge (need to explain the benefits of postpaid based on the profile/profession)",
       visible: false,
       visibleIf: "{reasonForNotInterested}='happyWithPrepaid'",
       width: "10"
      },
      {
       type: "text",
       name: "IssueFacedWithPostpaid",
       title: "May I know what was the issue you have faced?",
       visible: false,
       visibleIf: "{reasonForNotInterested}='previousBadExpInPostpaid'",
       width: "10"
      },
      {
       type: "text",
       name: "others",
       title: "Others",
       visible: false,
       visibleIf: "{reasonForNotInterested}='others'",
       width: "10"
      }
     ],
     visible: false,
     visibleIf: "{exit}='yes'",
     title: "Reason for Not Interested"
    }
   ],
   title: "Greetings!!!",
   navigationButtonsVisibility: "show"
  },
  {
   name: "Basics",
   elements: [
    {
     type: "multipletext",
     name: "customerPersonalDetails",
     width: "10",
     title: "Sir/Madam, May I know your Name and Secondary Phone number?",
     items: [
      {
       name: "customerFirstName",
       title: "First Name"
      },
      {
       name: "customerLastName",
       title: "Last Name"
      },
      {
       name: "customerSecondaryPhone",
       title: "Secondary Phone"
      }
     ],
     itemSize: 20
    },
    {
     type: "radiogroup",
     name: "AreYouUserOfConnection",
     width: "10",
     title: "Are you the user of the connection?",
     choices: [
      {
       value: "yes",
       text: "Yes"
      },
      {
       value: "no",
       text: "No"
      }
     ],
     colCount: 0
    },
    {
     type: "radiogroup",
     name: "TypeOfConnecton",
     width: "10",
     title: "Are you using a prepaid number or postpaid?",
     choices: [
      {
       value: "prepaid",
       text: "Pre Paid"
      },
      {
       value: "postpaid",
       text: "Post Paid"
      }
     ],
     colCount: 0
    },
    {
     type: "radiogroup",
     name: "typesOfHandset",
     width: "10",
     title: "Are you using a 3G Handset or a 4G handset?",
     choices: [
      {
       value: "3g",
       text: "3G"
      },
      {
       value: "4g",
       text: "4G"
      }
     ],
     colCount: 0
    },
    {
     type: "radiogroup",
     name: "NetworkType",
     width: "10",
     title: "May I know which network you are using?",
     choices: [
      {
       value: "vodafone",
       text: "Vodafone"
      },
      {
       value: "airtel",
       text: "Airtel"
      },
      {
       value: "bsnl",
       text: "BSNL"
      },
      {
       value: "idea",
       text: "IDEA"
      },
      {
       value: "aircel",
       text: "Aircel"
      },
      {
       value: "jio",
       text: "Jio"
      }
     ],
     colCount: 0
    },
    {
     type: "text",
     name: "SpendOnCallUsage",
     title: "How much do you spend for your mobile phone usage in a month?",
     width: "10"
    },
    {
     type: "text",
     name: "SpendOnInternetUsage",
     title: "May I know How much Internet do you use?",
     width: "10"
    },
    {
     type: "radiogroup",
     name: "UseStd",
     width: "10",
     title: "Do you use STD?",
     choices: [
      {
       value: "yes",
       text: "YES"
      },
      {
       value: "no",
       text: "NO"
      }
     ],
     colCount: 0
    },
    {
     type: "text",
     name: "UsageOfStd",
     startWithNewLine: false,
     title: "Approximately, How many minutes do you use?",
     visible: false,
     visibleIf: "{UseStd}='yes'",
     width: "10"
    },
    {
     type: "radiogroup",
     name: "UseIsd",
     width: "10",
     title: "Do you use ISD?",
     choices: [
      {
       value: "yes",
       text: "YES"
      },
      {
       value: "no",
       text: "NO"
      }
     ],
     colCount: 0
    },
    {
     type: "text",
     name: "UsageOfIsd",
     startWithNewLine: false,
     title: "Approximately, How many minutes do you use?",
     visible: false,
     visibleIf: "{UseIsd}='yes'",
     width: "10"
    },
    {
     type: "text",
     name: "TotalMonthlyRomingDays",
     startWithNewLine: false,
     title: "How many days in a month you will be in Roaming?",
     visible: false,
     visibleIf: "{useIsd}='yes'",
     width: "10"
    },
    {
     type: "radiogroup",
     name: "exit",
     width: "10",
     title: "EXIT CALL?",
     choices: [
      {
       value: "yes",
       text: "YES"
      },
      {
       value: "no",
       text: "NO"
      }
     ],
     colCount: 0
    }
   ],
   innerIndent: 3,
   navigationButtonsVisibility: "show"
  },
  {
   name: "ProductPitch",
   elements: [
    {
     type: "html",
     name: "customerBasicData",
     html: "<h3>Explain Customer about Product Best Fit based on customer Basic Data</h3>\n"
    },
    {
     type: "radiogroup",
     name: "checkCustomerInterest",
     title: "check whether the customer is interested/not interested/call back?",
     choices: [
      {
       value: "interested",
       text: "Interested"
      },
      {
       value: "notInterested",
       text: "Not Interested"
      },
      {
       value: "callback",
       text: "Callback"
      }
     ],
     colCount: 0
    },
    {
     type: "radiogroup",
     name: "exit",
     visible: false,
     visibleIf: "{checkPermission}='denied'",
     width: "10",
     title: "EXIT CALL?",
     choices: [
      {
       value: "yes",
       text: "YES"
      },
      {
       value: "no",
       text: "NO"
      }
     ],
     colCount: 0
    }
   ],
   title: "Product Best Fit Plan Pitch",
   innerIndent: 3,
   navigationButtonsVisibility: "show"
  },
  {
   name: "Interested",
   elements: [
    {
     type: "radiogroup",
     name: "OccupationType",
     width: "10",
     title: "May I know your occupation?",
     choices: [
      {
       value: "salaried",
       text: "Salaried"
      },
      {
       value: "professional",
       text: "Professional"
      },
      {
       value: "ownBusiness",
       text: "Own Business"
      },
      {
       value: "agriculture",
       text: "Agriculture"
      },
      {
       value: "retired",
       text: "Retired"
      },
      {
       value: "student",
       text: "Student"
      },
      {
       value: "housewife",
       text: "House Wife"
      },
      {
       value: "others",
       text: "Others"
      }
     ],
     colCount: 4
    },
    {
     type: "radiogroup",
     name: "convertToCUG",
     width: "10",
     title: "Do you use any other number which you can change to vodafone postpaid and make CUG?",
     choices: [
      {
       value: "yes",
       text: "Yes"
      },
      {
       value: "no",
       text: "No"
      }
     ],
     colCount: 0
    },
    {
     type: "radiogroup",
     name: "ProofOfStay",
     width: "10",
     title: "Does your proof contains the current address or different address?",
     choices: [
      {
       value: "currentAddress",
       text: "Current Address"
      },
      {
       value: "differentAddress",
       text: "Different Address"
      }
     ],
     colCount: 0
    },
    {
     type: "text",
     name: "distanceToVodafoneStore",
     title: "What is the distance between your residence and Vodafone store?",
     width: "10"
    },
    {
     type: "text",
     name: "monthlyIncome",
     title: "May I know your current monthly income?",
     width: "10"
    },
    {
     type: "radiogroup",
     name: "StayingType",
     width: "10",
     title: "May I know whether you are staying with your family or in bachelor stay?",
     choices: [
      {
       value: "familyStay",
       text: "Family Stay"
      },
      {
       value: "bachelorStay",
       text: "Bachelor Stay"
      }
     ],
     colCount: 0
    },
    {
     type: "radiogroup",
     name: "houseType",
     width: "10",
     title: "Are you living in a concrete builing or a hut house?",
     choices: [
      {
       value: "concreteHouse",
       text: "Concrete House"
      },
      {
       value: "hutHouse",
       text: "Hut House"
      }
     ],
     colCount: 0
    },
    {
     type: "radiogroup",
     name: "previousBillCopyAvailable",
     width: "10",
     title: "Can I get your previous bill copy?",
     choices: [
      {
       value: "yes",
       text: "Yes"
      },
      {
       value: "no",
       text: "No"
      }
     ],
     colCount: 0
    },
    {
     type: "text",
     name: "usageOfNumberOnCurrentNetwork",
     title: "May I know how long you are using this number with your current Network?",
     width: "10"
    },
    {
     type: "text",
     name: "CompanyName",
     title: "May I  know your company name?",
     width: "10"
    },
    {
     type: "radiogroup",
     name: "exit",
     width: "10",
     title: "EXIT CALL?",
     choices: [
      {
       value: "yes",
       text: "YES"
      },
      {
       value: "no",
       text: "NO"
      }
     ],
     colCount: 0
    }
   ],
   visible: false,
   visibleIf: "{checkCustomerInterest}='interested'",
   title: "Intrested",
   navigationButtonsVisibility: "show"
  },
  {
   name: "EvaluateCustomer",
   elements: [
    {
     type: "radiogroup",
     name: "checkEligible",
     title: "Check whether the customer is eligible? ",
     choices: [
      {
       value: "eligible",
       text: "Eligible"
      },
      {
       value: "noteligible",
       text: "Not Eligible"
      }
     ],
     colCount: 0
    }
   ],
   visible: false,
   visibleIf: "{checkCustomerInterest}='interested'"
  },
  {
   name: "EligibleCustomer",
   elements: [
    {
     type: "multipletext",
     name: "PermanentAddress",
     width: "10",
     title: "May I know your full address  with Landmark?",
     items: [
      {
       name: "doorNo",
       title: "Door Number"
      },
      {
       name: "buildingNumber",
       title: "Building Number"
      },
      {
       name: "street",
       title: "Street"
      },
      {
       name: "area",
       title: "Area"
      },
      {
       name: "city",
       title: "City"
      },
      {
       name: "taluk",
       title: "Taluk"
      },
      {
       name: "district",
       title: "District"
      },
      {
       name: "zone",
       title: "Zone/Circle"
      },
      {
       name: "state",
       title: "State"
      },
      {
       name: "pincode",
       title: "Pincode"
      },
      {
       name: "landmark",
       title: "LandMark"
      }
     ],
     itemSize: 30,
     colCount: 3
    },
    {
     type: "checkbox",
     name: "AddressProof",
     width: "10",
     title: "May I know What is the ID and Address Proof you have? ",
     choices: [
      {
       value: "drivinglicence",
       text: "Driving Licence"
      },
      {
       value: "rationcard",
       text: "Ration Card"
      },
      {
       value: "passport",
       text: "Passport"
      },
      {
       value: "bankpassbook",
       text: "Bank Passbook"
      },
      {
       value: "aadhar",
       text: "Aadhar "
      },
      {
       value: "voterid",
       text: "Voter ID"
      }
     ],
     colCount: 2
    },
    {
     type: "radiogroup",
     name: "IsPermanentContactAddressSame",
     width: "10",
     title: "Is the address you have mentioned is the address to meet you in person?",
     choices: [
      {
       value: "yes",
       text: "Yes"
      },
      {
       value: "no",
       text: "No"
      }
     ],
     colCount: 0
    },
    {
     type: "multipletext",
     name: "ContactAddress",
     visible: false,
     visibleIf: "{IsPermanentContactAddressSame}='no'",
     width: "10",
     title: "Please share the Contact Address",
     items: [
      {
       name: "doorNo",
       title: "Door Number"
      },
      {
       name: "buildingNumber",
       title: "Building Number"
      },
      {
       name: "street",
       title: "Street"
      },
      {
       name: "area",
       title: "Area"
      },
      {
       name: "city",
       title: "City"
      },
      {
       name: "taluk",
       title: "Taluk"
      },
      {
       name: "district",
       title: "District"
      },
      {
       name: "state",
       title: "State"
      },
      {
       name: "landMark",
       title: "LandMark"
      },
      {
       name: "pinCode",
       title: "Pincode"
      }
     ],
     itemSize: 30,
     colCount: 2
    },
    {
     type: "text",
     name: "numberOfConnectionReq",
     title: "How many connections do you require?",
     width: "10"
    },
    {
     type: "radiogroup",
     name: "exit",
     width: "10",
     title: "EXIT CALL",
     choices: [
      {
       value: "yes",
       text: "YES"
      },
      {
       value: "no",
       text: "NO"
      }
     ],
     colCount: 0
    }
   ],
   visible: false,
   visibleIf: "{checkEligible}='eligible'",
   title: "Eligible Customer"
  },
  {
   name: "DecideAndCallback",
   elements: [
    {
     type: "radiogroup",
     name: "ifDecideAndCallback",
     width: "10",
     title: "If Decide and Call back",
     choices: [
      {
       value: "outOfStation",
       text: "Out of station"
      },
      {
       value: "noProof",
       text: "No Proof currently"
      },
      {
       value: "haveTocheck",
       text: "Have to decide checking with family and Friends"
      },
      {
       value: "haveToArrangeDeposit",
       text: "Have to arrange deposit amount"
      },
      {
       value: "busy",
       text: "Currently Busy"
      },
      {
       value: "needtimeToDecide",
       text: "Need time to decide"
      },
      {
       value: "activateAfterCompleteBalance",
       text: "Will activate once the current balance get completed"
      },
      {
       value: "afterBCPlanCompleted",
       text: "MNP Customer will change once the BC gets completed"
      },
      {
       value: "afterDataOfferCompleted",
       text: "MNP Customer wil change once the data offer is completed"
      },
      {
       value: "others",
       text: "Others"
      }
     ],
     colCount: 2
    },
    {
     type: "text",
     name: "availableInTown",
     title: "When will you be available in the home town",
     visible: false,
     visibleIf: "{ifDecideAndCallback}='outOfStation'",
     width: "10"
    },
    {
     type: "text",
     inputType: "datetime-local",
     name: "callbackWhenInTown",
     startWithNewLine: false,
     title: "Get the call back Date & time",
     visible: false,
     visibleIf: "{ifDecideAndCallback}='outOfStation'",
     width: "10"
    },
    {
     type: "radiogroup",
     name: "canArrangeNecessaryProof",
     visible: false,
     visibleIf: "{ifDecideAndCallback}='noProof'",
     width: "10",
     title: "Can you able to arrange the necessary proof?",
     choices: [
      {
       value: "yes",
       text: "Yes"
      },
      {
       value: "no",
       text: "No"
      }
     ],
     colCount: 0
    },
    {
     type: "text",
     inputType: "datetime-local",
     name: "callbackWhenProofReady",
     startWithNewLine: false,
     title: "Get Call back date & time",
     visible: false,
     visibleIf: "{canArrangeNecessaryProof}='yes'",
     width: "10"
    },
    {
     type: "text",
     name: "necessaryOfHavingProof",
     title: "Explain the customer about the necessity of proof & close the call",
     visible: false,
     visibleIf: "{canArrangeNecessaryProof}='no'",
     width: "10"
    },
    {
     type: "text",
     inputType: "datetime-local",
     name: "question23",
     title: "Get the call back Date & time",
     visible: false,
     visibleIf: "{ifDecideAndCallback}=4",
     width: "10"
    },
    {
     type: "text",
     name: "question24",
     title: "Based on the customer's situation close the call ",
     visible: false,
     visibleIf: "{ifDecideAndCallback}=5",
     width: "10"
    },
    {
     type: "text",
     inputType: "datetime-local",
     name: "question25",
     title: "If possible get the Call back time",
     visible: false,
     visibleIf: "{ifDecideAndCallback}=5",
     width: "10"
    },
    {
     type: "text",
     inputType: "datetime-local",
     name: "question26",
     title: "When can get back to you, get the call back date & time",
     visible: false,
     visibleIf: "{ifDecideAndCallback}=6",
     width: "10"
    },
    {
     type: "text",
     name: "question27",
     title: "Convince the customer that he can able to carry forward the balance with the postpaid i.e, the amount will be credited with the first month bill",
     visible: false,
     visibleIf: "{ifDecideAndCallback}=7",
     width: "10"
    },
    {
     type: "text",
     inputType: "datetime-local",
     name: "question28",
     title: "Collect the Bill date & payment date , fix a time to call back the customer",
     visible: false,
     visibleIf: "{ifDecideAndCallback}=8",
     width: "10"
    },
    {
     type: "text",
     inputType: "datetime-local",
     name: "question29",
     title: "When can get back to you, get the call back date & time",
     visible: false,
     visibleIf: "{ifDecideAndCallback}=9",
     width: "10"
    },
    {
     type: "radiogroup",
     name: "exit",
     width: "10",
     title: "EXIT CALL?",
     choices: [
      {
       value: "yes",
       text: "YES"
      },
      {
       value: "no",
       text: "NO"
      }
     ],
     colCount: 0
    }
   ],
   visible: false,
   visibleIf: "{checkCustomerInterest}='callback'",
   title: "DecideAndCallback",
   innerIndent: 3,
   navigationButtonsVisibility: "show"
  },
  {
   name: "NotInterested",
   elements: [
    {
     type: "panel",
     elements: [
      {
       type: "radiogroup",
       name: "reasonForNotInterested",
       title: "May I know the reason why you are not interested?",
       choices: [
        {
         value: "happyWithOtherNetwork",
         text: "Happy with other network Coverage"
        },
        {
         value: "notHappyWithSuggestPlan",
         text: "Not happy with the suggested plan"
        },
        {
         value: "notReadyToPayDeposit",
         text: "Not ready to pay the Deposit"
        },
        {
         value: "abilityToMakePayment",
         text: "Ability to make payment"
        },
        {
         value: "happyWithCurrentNetworkRetentionPlan",
         text: "Happy with the current networks's retention plan"
        },
        {
         value: "companyLinkedConnection",
         text: "Company linked connections"
        },
        {
         value: "happyWithExistingNetworkOffer",
         text: "Happy with the existing network's offer"
        },
        {
         value: "happyWithPrepaid",
         text: "Happy with prepaid"
        },
        {
         value: "previousBadExpInPostpaid",
         text: "Previous bad experience in Postpaid"
        },
        {
         value: "others",
         text: "Others"
        }
       ],
       colCount: 2
      },
      {
       type: "multipletext",
       name: "residingLocationAndArea",
       visible: false,
       visibleIf: "{reasonForNotInterested}='happyWithOtherNetwork'",
       width: "10",
       title: "Can you tell me the location & area in which you are residing now ?",
       items: [
        {
         name: "location",
         title: "Location"
        },
        {
         name: "area",
         title: "Area"
        },
        {
         name: "city",
         title: "City"
        },
        {
         name: "zone",
         title: "Zone"
        },
        {
         name: "state",
         title: "State"
        }
       ],
       colCount: 2
      },
      {
       type: "radiogroup",
       name: "whatNetworkUsing",
       visible: false,
       visibleIf: "{reasonForNotInterested}='happyWithOtherNetwork'",
       width: "10",
       title: "May I know whether you are using 2G/3G/4G?",
       choices: [
        {
         value: "2g",
         text: "2G"
        },
        {
         value: "3g",
         text: "3G"
        },
        {
         value: "4g",
         text: "4G"
        }
       ],
       colCount: 0
      },
      {
       type: "text",
       name: "notHappyWithSuggestPlan",
       title: "Based on your usage we have suggested this plan, \nif you are not satisfied with this can we suggest some other plan?\nif yes need to explain some other plan",
       visible: false,
       visibleIf: "{reasonForNotInterested}='notHappyWithSuggestPlan'",
       width: "10"
      },
      {
       type: "text",
       name: "outOfCityLimit",
       title: "OCL - As your area is Out of City Limit, so Rs.______ is mandate ",
       visible: false,
       visibleIf: "{reasonForNotInterested}='notReadyToPayDeposit'",
       width: "10"
      },
      {
       type: "text",
       name: "bachelorDeposit",
       title: "If Bachelor - Bachelor deposit is mandate, by paying the deposit, the credit limit will be increased",
       visible: false,
       visibleIf: "{reasonForNotInterested}='notReadyToPayDeposit'",
       width: "10"
      },
      {
       type: "text",
       name: "others",
       title: "May I know your affordability for your monthly bill?",
       visible: false,
       visibleIf: "{reasonForNotInterested}='abilityToMakePayment'",
       width: "10"
      },
      {
       type: "text",
       name: "MonthlyBillAffordability",
       title: "May I know your usage pattern - Voice, SMS & Data?, suggest the plan based on the usage",
       visible: false,
       visibleIf: "{reasonForNotInterested}='abilityToMakePayment'",
       width: "10"
      },
      {
       type: "text",
       name: "offerbyExistingNetwork",
       title: "What was the offer provided by existing network?",
       visible: false,
       visibleIf: "{reasonForNotInterested}='happyWithCurrentNetworkRetentionPlan'",
       width: "10"
      },
      {
       type: "text",
       name: "authPersonContactNumber",
       title: "Can I have your authorised Person's contact number to discuss about the Vodafone postpaid offers",
       visible: false,
       visibleIf: "{reasonForNotInterested}='companyLinkedConnection'",
       width: "10"
      },
      {
       type: "text",
       name: "interestedToTakeNewConnection",
       title: "Are you interested to take new postpaid connnection for your personal purpose?",
       visible: false,
       visibleIf: "{reasonForNotInterested}='happyWithCurrentNetworkRetentionPlan'",
       width: "10"
      },
      {
       type: "multipletext",
       name: "currentPlanAndNetwork",
       visible: false,
       visibleIf: "{reasonForNotInterested}='happyWithExistingNetworkOffer'",
       width: "10",
       title: "What is the current plan your are using and its network?",
       items: [
        {
         name: "currentPlan",
         title: "Current Plan"
        },
        {
         name: "currentNetwork",
         title: "Current Network"
        }
       ],
       colCount: 2
      },
      {
       type: "text",
       name: "rechargePerMonth",
       title: "How much you are spening per month for your recharge",
       visible: false,
       visibleIf: "{reasonForNotInterested}='happyWithPrepaid'",
       width: "10"
      },
      {
       type: "radiogroup",
       name: "amountIncludeVoiceAndData",
       visible: false,
       visibleIf: "{reasonForNotInterested}='happyWithPrepaid'",
       width: "10",
       title: "Is the amount inclusive of Voice & Data",
       choices: [
        {
         value: "yesq",
         text: "YES"
        },
        {
         value: "no",
         text: "NO"
        }
       ],
       colCount: 0
      },
      {
       type: "text",
       name: "suggestedPlan",
       title: "If you have taken the postpaid connection you need not worry about the frequent recharge (need to explain the benefits of postpaid based on the profile/profession)",
       visible: false,
       visibleIf: "{reasonForNotInterested}='happyWithPrepaid'",
       width: "10"
      },
      {
       type: "text",
       name: "IssueFacedWithPostpaid",
       title: "May I know what was the issue you have faced?",
       visible: false,
       visibleIf: "{reasonForNotInterested}='previousBadExpInPostpaid'",
       width: "10"
      },
      {
       type: "text",
       name: "question11",
       title: "Others",
       visible: false,
       visibleIf: "{reasonForNotInterested}='others'",
       width: "10"
      }
     ],
     title: "Reason for Not Interested"
    }
   ],
   visible: false,
   visibleIf: "{checkCustomerInterest}='notInterested'"
  },
  {
   name: "ScheduleMeeting",
   elements: [
    {
     type: "text",
     inputType: "datetime-local",
     name: "meetingDateTime",
     title: "May I know the Date and time when our executive can meet you?",
     width: "10"
    },
    {
     type: "panel",
     name: "jobDetails",
     elements: [
      {
       type: "dropdown",
       name: "JobTitle",
       width: "25",
       title: "Job Title",
       choices: [
        "NewConnection",
        "CUG",
        "PreToPost"
       ]
      },
      {
       type: "text",
       name: "JobDescription",
       size: 55,
       title: "Job Description",
       width: "10"
      }
     ],
     title: "JobDetails"
    }
   ]
  }
 ],
 showProgressBar: "top",
 showQuestionNumbers: "off",
 triggers: [
  {
   type: "complete",
   operator: "equal",
   value: "yes",
   name: "exit"
  }
 ]
};



// Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
// Survey.Survey.cssType = "bootstrapmaterial";


Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
Survey.Survey.cssType = "bootstrap"; //bootstrapmaterial

var model = new Survey.Model(surveyJSON);


window.survey = model;
model.showTitle = false;


$("#surveyElement").Survey({  
  model:model,
  onComplete:sendDataToServer //SearchCustomerData
});

// Survey.Survey.cssType = "bootstrap";
// var survey = new Survey.Model(json);
// $("#surveyElement").SurveyWindow({
//     model:survey,
//     onComplete:sendDataToServer
// });

// $("#surveyElement").Survey({
//   model:model,
//   onComplete:sendDataToServer //SearchCustomerData
// });
 /*
    survey.onComplete.add(function (s) { 
    var result = "\nThe results are:\n" + JSON.stringify(survey.data);
    document.getElementById('survey_result').innerHTML = result; 
    document.getElementById('survey_oncomplete').style.display = '';
});
*/

}

if(!window["%hammerhead%"]) {
    init();
}
function collectProductNotInterestedReasons(data){
    var deniedCallbackDateTime;
    if("deniedCallbackDateTime" in data){
     deniedCallbackDateTime = {"DeniedCallbackDateTime" : data.deniedCallbackDateTime}
   }
    if(data.reasonForNotInterested=='happyWithOtherNetwork'){
      if("residingLocationAndArea" in data){
                  HappyWithotherNetwork={
                    area:data.residingLocationAndArea.area,
                    city:data.residingLocationAndArea.city,
                    location:data.residingLocationAndArea.location,
                    zone:data.residingLocationAndArea.zone,
                    state:data.residingLocationAndArea.state
                  }
            }
            HappyWithOtherNetworkJson={
              HappyWithotherNetwork
            }
            ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,HappyWithOtherNetworkJson);
    }
    if(data.reasonForNotInterested=='notReadyToPayDeposit'){
      NotreadyToDeposit={
        outOfCityLimit:data.outOfCityLimit,
        bachelorDeposit:data.bachelorDeposit

      }
      NotreadyToDepositJson={
      NotreadyToDeposit
      }
      ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,NotreadyToDepositJson);
    }
    if(data.reasonForNotInterested=='happyWithCurrentNetworkRetentionPlan'){
      HappyWithCurrentNetworkRetentionPlan={
        offerbyExistingNetwork:data.offerbyExistingNetwork,
        interestedToTakeNewConnection:data.interestedToTakeNewConnection

      }
      HppyWithCurrentNetworkRetentionPlanJson={
      HappyWithCurrentNetworkRetentionPlan
      }
       ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,HppyWithCurrentNetworkRetentionPlanJson);
    } 
    if(data.reasonForNotInterested=='happyWithExistingNetworkOffer'){
      if("currentPlanAndNetwork" in data){    
      HappyWithExistingNetworkOffer={
        currentNetwork:data.currentPlanAndNetwork.currentNetwork,
        currentPlan:data.bachelorDeposit.currentPlan
      }
      HappyWithExistingNetworkOfferJson={
      HappyWithExistingNetworkOffer
      }      
    } 
     ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,HappyWithExistingNetworkOfferJson);
    }
    if(data.reasonForNotInterested=='previousBadExpInPostpaid'){
      PreviousBadExpInPostpaid={
        IssueFacedWithPostpaid:data.IssueFacedWithPostpaid
      }
      PreviousBadExpInPostpaidJson={
      PreviousBadExpInPostpaid
      }
      ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,PreviousBadExpInPostpaidJson);
    } 
     
    if(data.reasonForNotInterested=='notHappyWithSuggestPlan'){
      SuggestedPlan={
        suggestedPlan:data.suggestedPlan

      }
      SuggestedPlanJson={
      SuggestedPlan
      }
       ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,SuggestedPlanJson);
    }   
    if(data.reasonForNotInterested=='abilityToMakePayment'){
      abilityToMakePayment={
        affordableMonthlyBill:data.affordableMonthlyBill,
        usagePattern:data.usagePattern
      }
      AbilityToMakePaymentJson={
      abilityToMakePayment
      }
      ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,AbilityToMakePaymentJson);
    }  
    if(data.reasonForNotInterested=='companyLinkedConnection'){
        CompanyLinkedConnection={
          authPersonContactNumber:data.authPersonContactNumber
        }
        CompanyLinkedConnectionJson={
        CompanyLinkedConnection
        }

        ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,CompanyLinkedConnectionJson);
      }  

    if(data.reasonForNotInterested=='happyWithPrepaid'){
      HappyWithPrepaid={
        postpaidBenefits:data.postpaidBenefits,
        amountIncludeVoiceAndData:data.amountIncludeVoiceAndData,
        rechargePerMonth:data.rechargePerMonth
      }
      HappyWithPrepaidJson={
      HappyWithPrepaid
      }
      ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,HappyWithPrepaidJson);
    }  
    if(data.reasonForNotInterested=='others'){
      Others={
        others:data.others,
      }
      OthersJson={
      Others
      }
      ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,OthersJson);
    } 
    return ProductsDeniedCallbackDetails;
}
function collectProductUsageData(data){
  var areYouUserOfConnection,typeOfConnecton,typesOfHandset,networkType,spendOnCallUsage,spendOnInternetUsage,useStd,usageOfStd,useIsd,usageOfIsd,totalMonthlyRomingDays;
  if("AreYouUserOfConnection" in data) areYouUserOfConnection = {"UserOfConnection" : data.AreYouUserOfConnection}
  if("TypeOfConnecton" in data) typeOfConnecton = {"ConnectionType" : data.TypeOfConnecton}
  if("typesOfHandset" in data) typesOfHandset = {"HandsetType" : data.typesOfHandset}
  if("NetworkType" in data) networkType = {"NetworkType" : data.NetworkType}
  if("SpendOnCallUsage" in data) spendOnCallUsage = {"SpendingforCall" : data.SpendOnCallUsage}
  if("SpendOnInternetUsage" in data) spendOnInternetUsage = {"SpendingforInternet" : data.SpendOnInternetUsage}
  if("UseStd" in data) useStd = {"UseSTD" : data.UseStd}
  if("UsageOfStd" in data) usageOfStd = {"UsageMinutesofSTD" : data.UsageOfStd}
  if("UseIsd" in data) useIsd = {"Use ISD" : data.UseIsd}
  if("UsageOfIsd" in data) usageOfIsd = {"UsageMinutesofISD" : data.UsageOfIsd}
  if("TotalMonthlyRomingDays" in data) totalMonthlyRomingDays = {"UserofConnection" : data.TotalMonthlyRomingDays}
  return ProductsUsageDetails = $.extend(areYouUserOfConnection,typeOfConnecton,typesOfHandset,networkType,spendOnCallUsage,spendOnInternetUsage,useStd,usageOfStd,useIsd,usageOfIsd,totalMonthlyRomingDays);
}
function collectProductInterestedData(data){
  var occupationType,convertToCUG,proofOfStay,distanceToVodafoneStore,monthlyIncome,stayingType,houseType,previousBillCopyAvailable,usageOfNumberOnCurrentNetwork,companyName;
  if("OccupationType" in data) occupationType = {"OccupationType" : data.OccupationType}
  if("convertToCUG" in data) convertToCUG = {"ConvertToCUG" : data.convertToCUG}
  if("ProofOfStay" in data) proofOfStay = {"StayingOn" : data.ProofOfStay}
  if("distanceToVodafoneStore" in data) distanceToVodafoneStore = {"DistanceToVodafoneStore" : data.distanceToVodafoneStore}
  if("monthlyIncome" in data) monthlyIncome = {"MonthlyIncome" : data.monthlyIncome}
  if("StayingType" in data) stayingType = {"StayingType" : data.StayingType}
  if("houseType" in data) houseType = {"HouseType" : data.houseType}
  if("previousBillCopyAvailable" in data) previousBillCopyAvailable = {"PreviousBillCopyAvailable" : data.previousBillCopyAvailable}
  if("usageOfNumberOnCurrentNetwork" in data) usageOfNumberOnCurrentNetwork = {"UsageOfNumberOnCurrentNetwork" : data.usageOfNumberOnCurrentNetwork}
  if("CompanyName" in data) companyName = {"Company" : data.CompanyName}
  return ProductsInterestedDetails = $.extend(occupationType,convertToCUG,proofOfStay,distanceToVodafoneStore,monthlyIncome,stayingType,houseType,previousBillCopyAvailable,usageOfNumberOnCurrentNetwork,companyName);
}
function collectPermanentAddress(data){
  var doorNo,buildingNumber,buildingName,street,area,city,taluk,district,zone,state,pincode,landmark;
  if("doorNo" in data.PermanentAddress) doorNo = {"DoorNumber" : data.PermanentAddress.doorNo}
  if("buildingNumber" in data.PermanentAddress) buildingNumber = {"BuildingNumber" : data.PermanentAddress.buildingNumber}
  if("buildingName" in data.PermanentAddress) buildingName = {"BuildingName" : data.PermanentAddress.buildingName}
  if("street" in data.PermanentAddress) street = {"Street" : data.PermanentAddress.street}
  if("area" in data.PermanentAddress) area = {"Area" : data.PermanentAddress.area}
  if("city" in data.PermanentAddress) city = {"City" : data.PermanentAddress.city}
  if("taluk" in data.PermanentAddress) taluk = {"Taluk" : data.PermanentAddress.taluk}
  if("district" in data.PermanentAddress) district = {"District" : data.PermanentAddress.district}
  if("state" in data.PermanentAddress) state = {"State" : data.PermanentAddress.state}
  if("pincode" in data.PermanentAddress) pincode = {"Pincode" : data.PermanentAddress.pincode}
  if("landmark" in data.PermanentAddress) landmark = {"Landmark" : data.PermanentAddress.landmark}
  return PermanentAddress = $.extend(doorNo,buildingNumber,buildingName,street,area,city,taluk,district,zone,state,pincode,landmark);
}
function collectContactAddress(data){
  var doorNo,buildingNumber,buildingName,street,area,city,taluk,district,zone,state,pincode,landmark;
  if("doorNo" in data.ContactAddress) doorNo = {"DoorNumber" : data.ContactAddress.doorNo}
  if("buildingNumber" in data.ContactAddress) buildingNumber = {"BuildingNumber" : data.ContactAddress.buildingNumber}
  if("buildingName" in data.ContactAddress) buildingName = {"BuildingName" : data.ContactAddress.buildingName}
  if("street" in data.ContactAddress) street = {"Street" : data.ContactAddress.street}
  if("area" in data.ContactAddress) area = {"Area" : data.ContactAddress.area}
  if("city" in data.ContactAddress) city = {"City" : data.ContactAddress.city}
  if("taluk" in data.ContactAddress) taluk = {"Taluk" : data.ContactAddress.taluk}
  if("district" in data.ContactAddress) district = {"District" : data.ContactAddress.district}
  if("state" in data.ContactAddress) state = {"State" : data.ContactAddress.state}
  if("pincode" in data.ContactAddress) pincode = {"Pincode" : data.ContactAddress.pincode}
  if("landmark" in data.ContactAddress) landmark = {"Landmark" : data.ContactAddress.landmark}
  return ContactAddress = $.extend(doorNo,buildingNumber,buildingName,street,area,city,taluk,district,zone,state,pincode,landmark);
}
function collectAddressProof(data){
  var drivinglicence,rationcard,passport,bankpassbook,aadhar,voterid; 
  for(var key in data.AddressProof){
    var value = data.AddressProof[key];
    if(value == "drivinglicence"){
      drivinglicence = {"DrivingLicence": value}
    }
    if(value == "rationcard"){
      rationcard = {"RationCard": value}
    }
    if(value == "passport"){
      passport = {"Passport": value}
    }
    if(value == "bankpassbook"){
      bankpassbook = {"BankPassbook": value}
    }
    if(value == "aadhar"){
      aadhar = {"AadharId": value}
    }
    if(value == "voterid"){
      voterid = {"VoterId": value}
    }    
  }  
  // if("0" in data.AddressProof) drivinglicence = {"DrivingLicence" : data.AddressProof[0]} //drivinglicence
  // if("1" in data.AddressProof) rationcard = {"RationCard" : data.AddressProof[1]}//.rationcard}
  // if("2" in data.AddressProof) passport = {"Passport" : data.AddressProof[2]} //passport
  // if("3" in data.AddressProof) bankpassbook = {"BankPassbook" : data.AddressProof[3]} //bankpassbook
  // if("4" in data.AddressProof) aadhar = {"Aadhar" : data.AddressProof[4]} //aadhar
  // if("5" in data.AddressProof) voterid = {"VoterID" : data.AddressProof[5]} //voterid
   return AddressProof = $.extend(drivinglicence,rationcard,passport,bankpassbook,aadhar,voterid);
}
function collectDecideAndCallbackReasons(data){
  if("outOfStation"==data.ifDecideAndCallback){
    availableInTown = {"AvailableInTown" : data.availableInTown}
    callbackDateAndTime = {"CallbackDateAndTime" : data.callbackWhenInTown}
    OutOfStation = $.extend(availableInTown,callbackDateAndTime); 
    return OutOfStatioJson = {OutOfStation};
  }
  if("haveTocheck"==data.ifDecideAndCallback){
    return {"DecideAndCallbackReason" : data.ifDecideAndCallback}   
  }
  if("busy"==data.ifDecideAndCallback){
    return {"DecideAndCallbackReason" : data.ifDecideAndCallback}   
  }
  if("activateAfterCompleteBalance"==data.ifDecideAndCallback){
    return {"DecideAndCallbackReason" : data.ifDecideAndCallback}   
  }
  if("afterDataOfferCompleted"==data.ifDecideAndCallback){
    return {"DecideAndCallbackReason" : data.ifDecideAndCallback}   
  }
  if("afterBCPlanCompleted" ==data.ifDecideAndCallback){
    return {"DecideAndCallbackReason" : data.ifDecideAndCallback}   
  }
  if("noProof"==data.ifDecideAndCallback){
    DecideAndCallbackReason = {"CanArrangeNecessaryProof" : data.canArrangeNecessaryProof} 
    return NoProof={
      DecideAndCallbackReason
    }
  }
  if("haveToArrangeDeposit"==data.ifDecideAndCallback){
    return {"DecideAndCallbackReason" : data.ifDecideAndCallback}   
  }
  if("needtimeToDecide"==data.ifDecideAndCallback){
    return {"DecideAndCallbackReason" : data.ifDecideAndCallback}   
  }
  if("others"==data.ifDecideAndCallback){
    return {"DecideAndCallbackReason" : data.ifDecideAndCallback}   
  }

}
var jobId,jobDateTime,jobTitle,jobDescription,jobStatus,JobDetails,jobCreatedTime,jobLocation,JobDetailsJson;
function getJobDetails(data){
  var currentdate = new Date(); 
  var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

  var JobIdGen = TaskIdGenerator(); 
  jobId = {"JobId" : JobIdGen}
    jobDateTime = {"JobDateTime" : data.meetingDateTime}
    jobTitle = {"JobTitle" : data.JobTitle}
    jobDescription = {"JobDescription" : data.JobDescription}
    jobStatus = {JobStatus:"Unassigned"}
    jobLocation = {Joblocation:data.PermanentAddress.street + "," + data.PermanentAddress.area}
    jobCreatedTime = {JobCreatedTime:datetime}
    JobDetails = $.extend(jobId,jobDateTime,jobTitle,jobDescription,jobStatus,jobLocation,jobCreatedTime); 
    return JobDetailsJson = {JobDetails};  
}
function sendDataToServer(survey) {
var PersonalDetailsJson=PersonalDetails=[];
var ProductsUsageDetails=[];
var ProductsInterestedDetails=[];
var ProductsNotInterestedDetails=[];
var ProductsDeniedCallbackDetails=[];
var ProductsDecidesCallbackDetails=[];
var ProductsInterestedCallbackDetails=[];
var ProductsNotInterestedCallbackDetails=[];
var AddressProofJson=AddressProof=[];
var ProductFeedbackJson={Feedback:{Industry:{Company:{Product:{ProductFeedback:[]}}}}};
var PermanentAddressJson = PermanentAddress=[];
var ContactAddressJson = ContactAddress=[];
var JobDetailsjson = JobDetails=[];
var CustomerProfileJson = CustomerProfile=[];

var primaryPhone,secondaryPhone,firstName,lastName;
    if("PrimaryPhone" in survey.data) primaryPhone = {"PrimaryPhone" : survey.data.PrimaryPhone}
    if("customerPersonalDetails" in survey.data){    
    if("customerSecondaryPhone" in survey.data.customerPersonalDetails) secondaryPhone = {"SecondaryPhone" : survey.data.customerPersonalDetails.customerSecondaryPhone}
    if("customerFirstName" in survey.data.customerPersonalDetails) firstName = {"FirstName" : survey.data.customerPersonalDetails.customerFirstName}
    if("customerLastName" in survey.data.customerPersonalDetails) lastName = {"LastName" : survey.data.customerPersonalDetails.customerLastName}
  }
var PersonalDetail = $.extend(primaryPhone,secondaryPhone,firstName,lastName);

if("checkPermission" in survey.data){
  if("permission"==survey.data.checkPermission){
    ProductsUsageDetails = collectProductUsageData(survey.data);
  }
}
if("checkPermission" in survey.data){ 
  if("denied"==survey.data.checkPermission){ 
    if("reasonForNotInterested" in survey.data){ 
      ProductsDeniedCallbackDetails = collectProductNotInterestedDetails(survey.data);
    }
  }
}
if("checkCustomerInterest" in survey.data){
  if("interested"==survey.data.checkCustomerInterest){
    ProductsInterestedDetails = collectProductInterestedData(survey.data);
  }
}

var residingLocation,convertToCUG,explainPlan,outOfCityLimitPay,bachelorDeposit,monthlyAffordBill,usagePattern,offerByExitingnetwork,authorisedPersionContact,interestedForNewPostpaid,
    currentPlanInUse,currentlyUsingNetwork,monthlyRechargeAmount,amountInclusiveForVoiceAndData,explainPostpaidBenefits,issuesFaced;
if(survey.data.checkCustomerInterest=='notInterested'){   
  ProductsNotInterestedDetails = collectProductNotInterestedReasons(survey.data);
}

if("checkCustomerInterest" in survey.data){
  if("callback"==survey.data.checkCustomerInterest){
    ProductsDecidesCallbackDetails = collectDecideAndCallbackReasons(survey.data);
  }
}
if("checkEligible" in survey.data){  
  if("eligible"==survey.data.checkEligible){
    PermanentAddressJson.PermanentAddress = collectPermanentAddress(survey.data);
  }
}
if("AddressProof" in survey.data){   
   AddressProofJson.AddressProof = collectAddressProof(survey.data);
}
var doorNo,buildingNumber,buildingName,street,area,city,taluk,district,zone,state,pincode,landmark;
if("IsPermanentContactAddressSame" in survey.data){
  if("no"==survey.data.IsPermanentContactAddressSame){  
    ContactAddressJson.ContactAddress = collectContactAddress(survey.data);
  }
}   

if("meetingDateTime" in survey.data)
{ 
  if(survey.data.meetingDateTime !== 'null'){
  JobDetailsjson.JobDetails = getJobDetails(survey.data);
  }
}
  //JobDateTime = {"JobDateTime" : survey.data.meetingDateTime};
  //if(JobDateTime[JobDateTime] !== 'null'){
//   if(survey.data.meetingDateTime !== 'null'){
//   var JobId = TaskIdGenerator();
//   // JobDetailsjson={
//   //   "JobId":JobId
//   // }
//   JobDetailsjson.JobDetails={
//     "JobId":JobId,
//     JobTitle:"",
//     JobDescription:"",
//     JobStatus:"Unassigned",
//     "JobDateTime" : survey.data.meetingDateTime,
//     Joblocation:street + "," + area
//   }
// }
// }


ProductFeedbackJson.Feedback.Industry={"Name":"Tele"};
ProductFeedbackJson.Feedback.Industry.Company={"Name":"Vodafone"};
ProductFeedbackJson.Feedback.Industry.Company.Product={"Name":"PreToPost"};

ProductFeedbackJson.Feedback.Industry.Company.Product.ProductFeedback ={
  ProductsDeniedCallbackDetails,
  ProductsDecidesCallbackDetails,
  ProductsUsageDetails,
  ProductsInterestedDetails,
  ProductsInterestedCallbackDetails,
  ProductsNotInterestedDetails,
  ProductsNotInterestedCallbackDetails  
}

var CustomerProfile = $.extend(PersonalDetail,PermanentAddressJson,ContactAddressJson,AddressProofJson);
CustomerProfileJson= {
 CustomerProfile
}

var surveyProfile = $.extend(CustomerProfileJson,JobDetailsjson,ProductFeedbackJson);

$.ajax({
  url:"http://localhost:3001/savesurvey",
  type: "POST",
    crossDomain: true,
    data: surveyProfile,
    dataType: "json",
    success:function(){},
    error:function(){}
});
}
function createCustomerProfile(jobDetails,customerProfile,productFeedback){
  $.ajax({
        url: "https://gdp-server-manikandanmuthuv.c9users.io/customer/profile", 
        type: "POST",
        crossDomain: true,
        data: customerProfile,
        dataType: "json",
        success:function(customerProfileResponse){
          var customerModel = JSON.parse(JSON.stringify(customerProfileResponse));
          var CustomerId="CustomerId";
          productFeedback[CustomerId] = customerModel._id;
          if(jobDetails.length !== 0){
          jobDetails[CustomerId] = customerModel._id;
          createTask(jobDetails); 
         }
          createProductFeedback(productFeedback);
        },
        error:function(xhr,status,error){
            //alert(status);
        }
    });
  } 
function createProductFeedback(productFeedback){
    $.ajax({
            url: "https://gdp-server-manikandanmuthuv.c9users.io/api/customer/feedback", 
            type: "POST",
            crossDomain: true,
            data:productFeedback,
            dataType: "json",
            success:function(result){
                //alert(JSON.stringify(result));
            },
            error:function(xhr,status,error){
               //alert(status);
            }
        });
}
function createTask(taskDetails){
    $.ajax({
            url: "https://gdp-server-manikandanmuthuv.c9users.io/api/employee/job", 
            type: "POST",
            crossDomain: true,
            data:taskDetails,
            dataType: "json",
            success:function(result){
                //alert(JSON.stringify(result));
            },
            error:function(xhr,status,error){
               // alert(status);
            }
        });
}

function TaskIdGenerator() {
     
    this.length = 6;
    this.timestamp = +new Date;

    var getRandomInt = function( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }

    var ts = this.timestamp.toString();
    var parts = ts.split( "" ).reverse();
    var id = "";

    for( var i = 0; i < this.length; ++i ) {
    var index = getRandomInt( 0, parts.length - 1 );
    id += parts[index];  
    }     
    return id;       
         
}