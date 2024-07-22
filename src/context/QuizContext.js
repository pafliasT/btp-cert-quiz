import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();

function Provider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = {
    A1: [
      {
        "id": 1,
        "question": "Which of the following objects are accessible in the S/4HANA Cloud Extensibility Cockpit? (2 corrects)",
        "answers": [
          { "answer": "DLL objects", "trueAnswer": false },
          { "answer": "CDS views", "trueAnswer": true },
          { "answer": "Form templates", "trueAnswer": true },
          { "answer": "Tables", "trueAnswer": false }
        ]
      },
      {
        "id": 2,
        "question": "In Cloud Foundry, which attribute of an application reflects its original development language? Choose the correct answer.",
        "answers": [
          { "answer": "The Requested State", "trueAnswer": false },
          { "answer": "The Route", "trueAnswer": false },
          { "answer": "The Buildpack.", "trueAnswer": true },
          { "answer": "The Space.", "trueAnswer": false }
        ]
      },
      {
        "id": 3,
        "question": "What are the advantages of using an MTA file for deployment? Choose the 2 correct answers.",
        "answers": [
          { "answer": "It supports red - green deployment.", "trueAnswer": false },
          { "answer": "It supports blue-green deployment.", "trueAnswer": true },
          { "answer": "It provides workflows.", "trueAnswer": false },
          { "answer": "It provides a build tool.", "trueAnswer": true }
        ]
      },
      {
        "id": 4,
        "question": "What is a \"main line\" in a source control management system used for? Choose the correct answer.",
        "answers": [
          { "answer": "To automate deployment", "trueAnswer": false },
          { "answer": "To make developers' contributions transparent and avoid clashes", "trueAnswer": true },
          { "answer": "To enable a reporting line for the project manager", "trueAnswer": false }
        ]
      },
      {
        "id": 5,
        "question": "What tooling is pre-installed in SAP Business Application Studio to speed up SAP Fiori UI development?",
        "answers": [
          { "answer": "Bootstrap Toolkit", "trueAnswer": false },
          { "answer": "SAP Fiori Tools", "trueAnswer": true },
          { "answer": "Vue.js Extensions", "trueAnswer": false }
        ]
      },
      {
        "id": 6,
        "question": "After you run the command cds add hana, which file is updated with the required configuration?",
        "answers": [
          { "answer": "package.json", "trueAnswer": true },
          { "answer": "package.js", "trueAnswer": false },
          { "answer": "package.mta", "trueAnswer": false },
          { "answer": "package.cds", "trueAnswer": false }
        ]
      },
      {
        "id": 7,
        "question": "The credentials created in the SAP Continuous Integration and Delivery service enable you to do which of the following? Note: There are 2 correct answers.",
        "answers": [
          { "answer": "Connect to S/4 HANA Cloud", "trueAnswer": false },
          { "answer": "Deploy applications to the SAP BTP, Cloud Foundry environment.", "trueAnswer": true },
          { "answer": "Connect to a private GitHub repository.", "trueAnswer": true },
          { "answer": "Access the service itself.", "trueAnswer": false }
        ]
      },
      {
        "id": 8,
        "question": "Which is the IDE of choice when using CAP on SAP Business technology Platform?",
        "answers": [
          { "answer": "SAP Business Application Studio", "trueAnswer": true },
          { "answer": "SAP WebIDE", "trueAnswer": false },
          { "answer": "Visual Studio", "trueAnswer": false },
          { "answer": "Jupyter Notebook", "trueAnswer": false }
        ]
      },
      {
        "id": 9,
        "question": "What do you need to connect a service to the Sandbox environment of the SAP API Business Hub for the Business Partner API that you want to use?",
        "answers": [
          { "answer": "An API key", "trueAnswer": true },
          { "answer": "A personal token", "trueAnswer": false },
          { "answer": "A password", "trueAnswer": false },
          { "answer": "An authenticator", "trueAnswer": false }
        ]
      },
      {
        "id": 10,
        "question": "Which statement is true about CAP's interaction with user interfaces?",
        "answers": [
          { "answer": "CAP services can only be consumed by other backend services.", "trueAnswer": false },
          { "answer": "CAP services can be consumed by any UI framework through standard AJAX requests.", "trueAnswer": true },
          { "answer": "CAP services are limited to SAP Fiori UIs.", "trueAnswer": false }
        ]
      },
      {
        "id": 11,
        "question": "How can you implement the continuous integration and continuous deployment of your CAP application? Note: There are 2 correct answers.",
        "answers": [
          { "answer": "Using the Project \"Piper\".", "trueAnswer": true },
          { "answer": "Pushing the code to a centralized and remote source code management system.", "trueAnswer": false },
          { "answer": "Deploying the application to SAP BTP.", "trueAnswer": false },
          { "answer": "Integrating the SAP CI/CD service.", "trueAnswer": true }
        ]
      },
      {
        "id": 12,
        "question": "What are the main features and capabilities of the app router? Note: There are 3 correct answers to this question.",
        "answers": [
          { "answer": "It manages the authentication flows for the application.", "trueAnswer": true },
          { "answer": "It downloads all necessary libraries.", "trueAnswer": false },
          { "answer": "It can serve static content such as web pages, SAPUI5 or other client side code.", "trueAnswer": true },
          { "answer": "It acts as an authorization server.", "trueAnswer": false },
          { "answer": "It is the central entry point of the application.", "trueAnswer": true }
        ]
      },
      {
        "id": 13,
        "question": "You extended an SAP Business Standard API with custom fields. Where do you find the fields in the exposed OData API?",
        "answers": [
          { "answer": "In a new API", "trueAnswer": false },
          { "answer": "In a new SAP Business Standard API", "trueAnswer": false },
          { "answer": "In the extended SAP Business Standard API", "trueAnswer": true }
        ]
      },
      {
        "id": 14,
        "question": "Which statements are true about CAP's deployment options? Choose the 2 correct answers.",
        "answers": [
          { "answer": "CAP has built-in support for multitenancy.", "trueAnswer": true },
          { "answer": "CAP applications can only be deployed on SAP BTP environments.", "trueAnswer": false },
          { "answer": "CAP applications can be deployed to SAP BTP Cloud Foundry and KYMA environments.", "trueAnswer": true },
          { "answer": "CAP can only be used for single tenant applications.", "trueAnswer": false }
        ]
      },
      {
        "id": 15,
        "question": "In SAP Build Process Automation, what is a decision table rule?",
        "answers": [
          { "answer": "A tabular set of business process decisions", "trueAnswer": false },
          { "answer": "A tabular set of input/output rule expressions", "trueAnswer": true },
          { "answer": "A set of rule expressions in an IF-THEN format", "trueAnswer": false },
          { "answer": "A set of pre-defined data objects", "trueAnswer": false }
        ]
      },
      {
        "id": 16,
        "question": "Which of the following is a feature of SAP Fiori Tools designed to visually assist in SAP Fiori UI development?",
        "answers": [
          { "answer": "AJAX Mapper", "trueAnswer": false },
          { "answer": "List Page Designer", "trueAnswer": false },
          { "answer": "Page Map", "trueAnswer": true }
        ]
      },
      {
        "id": 17,
        "question": "When using CAP in the SAP Business Application Studio, you want to use Core Data Services to define the persistence layer. Which extension do you use for the design-time file?",
        "answers": [
          { "answer": ".hdbtable", "trueAnswer": false },
          { "answer": ".cds", "trueAnswer": true },
          { "answer": ".hdbcds", "trueAnswer": false },
          { "answer": ".hdbddl", "trueAnswer": false }
        ]
      },
      {
        "id": 18,
        "question": "What are some of the characteristics of an extension application?",
        "answers": [
          { "answer": "Its UI layer is directly coupled with the back-end layer", "trueAnswer": false },
          { "answer": "It consists of several layers", "trueAnswer": true },
          { "answer": "Its UI layer is decoupled from the back-end layer", "trueAnswer": true },
          { "answer": "It requires its own authorization management", "trueAnswer": false }
        ]
      },
      {
        "id": 19,
        "question": "Which of the following is one of the main side-by-side extensibility scenario?",
        "answers": [
          { "answer": "Extend user interfaces", "trueAnswer": true },
          { "answer": "Extend OData interfaces", "trueAnswer": false },
          { "answer": "Extend database", "trueAnswer": false }
        ]
      },
      {
        "id": 20,
        "question": "What is the maximum amount of RAM a single application instance on SAP BTP, Cloud Foundry can use?",
        "answers": [
          { "answer": "2 GB", "trueAnswer": false },
          { "answer": "16 GB", "trueAnswer": false },
          { "answer": "8 GB", "trueAnswer": true },
          { "answer": "4 GB", "trueAnswer": false }
        ]
      },
      {
        "id": 21,
        "question": "Which criticality value is assigned to Negative criticality?",
        "answers": [
          { "answer": "3", "trueAnswer": false },
          { "answer": "4", "trueAnswer": false },
          { "answer": "1", "trueAnswer": true },
          { "answer": "2", "trueAnswer": false }
        ]
      },
      {
        "id": 22,
        "question": "In which environment can you deploy a cloud native micro app?",
        "answers": [
          { "answer": "SAP HANA Enterprise Cloud", "trueAnswer": false },
          { "answer": "ABAP stack", "trueAnswer": false },
          { "answer": "SAP BTP, Cloud Foundry environment", "trueAnswer": true }
        ]
      },
      {
        "id": 23,
        "question": "What are some of the Continuous Integration principles? Choose the 3 correct answers.",
        "answers": [
          { "answer": "Fix errors only when users complain.", "trueAnswer": false },
          { "answer": "Fix errors immediately.", "trueAnswer": true },
          { "answer": "Run tests only in production.", "trueAnswer": false },
          { "answer": "Use version control.", "trueAnswer": true },
          { "answer": "Run tests in the build.", "trueAnswer": true }
        ]
      },
      {
        "id": 24,
        "question": "Which of the following are part of the local tests in the SAP Cloud SDK pipeline? Choose 3 correct answers.",
        "answers": [
          { "answer": "Performance tests", "trueAnswer": false },
          { "answer": "Front-end unit tests", "trueAnswer": true },
          { "answer": "Regression tests", "trueAnswer": false },
          { "answer": "Static code checks", "trueAnswer": true },
          { "answer": "Background integration tests", "trueAnswer": true }
        ]
      },
      {
        "id": 25,
        "question": "What is the default IDE for SAP's multi-cloud environment?",
        "answers": [
          { "answer": "SAP Business Application Studio", "trueAnswer": true },
          { "answer": "Oxygen", "trueAnswer": false },
          { "answer": "Eclipse", "trueAnswer": false },
          { "answer": "Microsoft Visual Code", "trueAnswer": false }
        ]
      },
      {
        "id": 26,
        "question": "Which of the following tools are required to build Spring Boot applications using the SAP Cloud SDK? Note: There are 2 correct answers to this question.",
        "answers": [
          { "answer": "Spring Initializ", "trueAnswer": false },
          { "answer": "SAP Mobile Services (MDK)", "trueAnswer": false },
          { "answer": "Java SE Development Kit 8", "trueAnswer": true },
          { "answer": "Apache Maven version 3.5 or above", "trueAnswer": true }
        ]
      },
      {
        "id": 27,
        "question": "Which of the following statements about a GitHub Repository are correct? Choose the 3 correct answers.",
        "answers": [
          { "answer": "Anyone on the internet can see a private repository.", "trueAnswer": false },
          { "answer": "You choose who can commit into your private repository.", "trueAnswer": true },
          { "answer": "Anyone on the internet can see a public repository.", "trueAnswer": true },
          { "answer": "You choose who can see your private repository.", "trueAnswer": true },
          { "answer": "Anyone on the internet can commit into a public repository.", "trueAnswer": false }
        ]
      },
      {
        "id": 28,
        "question": "Which models can you use to develop a micro app? (2 corrects)",
        "answers": [
          { "answer": "SAP ABAP RESTful programming model", "trueAnswer": false },
          { "answer": "SAP Cloud Application Programming Model (CAP)", "trueAnswer": true },
          { "answer": "SAP HANA extended application services, classic model", "trueAnswer": false },
          { "answer": "SAP HANA extended application services, advanced model", "trueAnswer": true }
        ]
      },
      {
        "id": 29,
        "question": "How many event handlers can you register for one event phase?",
        "answers": [
          { "answer": "Exactly four", "trueAnswer": false },
          { "answer": "Multiple", "trueAnswer": true },
          { "answer": "Exactly one", "trueAnswer": false },
          { "answer": "Exactly three", "trueAnswer": false }
        ]
      },
      {
        "id": 30,
        "question": "What is OData?",
        "answers": [
          { "answer": "A standard to share data under a creative commons license", "trueAnswer": false },
          { "answer": "A standard to access data through RESTful APIs", "trueAnswer": true },
          { "answer": "A standard to create user interfaces (UI) for applications", "trueAnswer": false }
        ]
      },
      {
        "id": 31,
        "question": "When you develop a CAP application, what can be used in order to connect to an external Cloud system? Note: There are 3 correct answers.",
        "answers": [
          { "answer": "Subaccount Destinations", "trueAnswer": true },
          { "answer": "Global Account Destinations", "trueAnswer": false },
          { "answer": "Node.js configured destinations", "trueAnswer": true },
          { "answer": "SAP BTP destinations using Destination Service", "trueAnswer": true },
          { "answer": "Cloud Connector", "trueAnswer": false }
        ]
      },
      {
        "id": 32,
        "question": "A CRUD operation violated the foreign key constraints. Why should you register an error handler in your service implementation for the exception of the CAP SDK for Node.js?",
        "answers": [
          { "answer": "To avoid a break in the app execution", "trueAnswer": false },
          { "answer": "To force the execution of the CRUD operation", "trueAnswer": false },
          { "answer": "To ensure that the end user receives a message", "trueAnswer": false },
          { "answer": "To provide a meaningful error message", "trueAnswer": true }
        ]
      },
      {
        "id": 33,
        "question": "What is the recommended approach for adding custom business logic to an SAP S/4HANA Cloud system?",
        "answers": [
          { "answer": "Adding custom code to the ABAP application server", "trueAnswer": false },
          { "answer": "Modifying core SAP code", "trueAnswer": false },
          { "answer": "Directly running custom logic on the application server", "trueAnswer": false },
          { "answer": "Using side-by-side extensibility with SAP BTP", "trueAnswer": true }
        ]
      },
      {
        "id": 34,
        "question": "Which of the following applies to Custom Event handlers? Note: There are 3 correct answers.",
        "answers": [
          { "answer": "Single handlers can be registered for multiple events.", "trueAnswer": true },
          { "answer": "Multiple Event Handlers can be registered for same event.", "trueAnswer": true },
          { "answer": "Multiple Event Handlers can not be registered for same event.", "trueAnswer": false },
          { "answer": "CRUD requests are not served by Generic handlers.", "trueAnswer": false },
          { "answer": "Registered custom handlers can add Domain logic to application.", "trueAnswer": true }
        ]
      },
      {
        "id": 35,
        "question": "What is the programming model used in non-ABAP based extensions on SAP BTP?",
        "answers": [
          { "answer": "SAP Cloud Application Programming Model", "trueAnswer": true },
          { "answer": "ABAP RESTful Programming Model", "trueAnswer": false },
          { "answer": "SAP Fiori Programming Model", "trueAnswer": false }
        ]
      },
      {
        "id": 36,
        "question": "Which are the Service APIs for Custom Logic? Note: There are 3 correct answers.",
        "answers": [
          { "answer": "Querying API", "trueAnswer": true },
          { "answer": "External Services", "trueAnswer": false },
          { "answer": "Custom API", "trueAnswer": false },
          { "answer": "Event Handling", "trueAnswer": true },
          { "answer": "Messaging API", "trueAnswer": true }
        ]
      },
      {
        "id": 37,
        "question": "Which of the following is a constraint of REST?",
        "answers": [
          { "answer": "IDocs with links", "trueAnswer": false },
          { "answer": "Hypermedia as the Engine of Application State (HATEOAS) including links", "trueAnswer": true },
          { "answer": "SOAP with media links", "trueAnswer": false }
        ]
      },
      {
        "id": 38,
        "question": "What is a Multi-Target-Application (MTA) comprised of?",
        "answers": [
          { "answer": "modules and services", "trueAnswer": false },
          { "answer": "modules and instances", "trueAnswer": false },
          { "answer": "modules and resources", "trueAnswer": true }
        ]
      },
      {
        "id": 39,
        "question": "You are tasked with developing a simple end-to-end application with data persistency in SAP HANA Cloud and with SAP Fiori as the user frontend, to perform CRUD operations. According to the programming model's golden path, which activities are mandatory when building such applications? Note: There are 3 correct answers to this question.",
        "answers": [
          { "answer": "Add custom logic.", "trueAnswer": false },
          { "answer": "Add the SAP Fiori UI.", "trueAnswer": true },
          { "answer": "Define the data model.", "trueAnswer": true },
          { "answer": "Reuse existing services.", "trueAnswer": false },
          { "answer": "Define services.", "trueAnswer": true }
        ]
      },
      {
        "id": 40,
        "question": "Which of the following features are provided by SAP BAS?",
        "answers": [
          { "answer": "OData modelling", "trueAnswer": false },
          { "answer": "SAPUI5 templates", "trueAnswer": true },
          { "answer": "Git integration", "trueAnswer": true },
          { "answer": "Destination administration", "trueAnswer": false }
        ]
      },
      {
        "id": 41,
        "question": "Which method can you use to collect error messages with high severity and return them to the caller in the request-response?",
        "answers": [
          { "answer": "req.reply", "trueAnswer": false },
          { "answer": "req.notify", "trueAnswer": false },
          { "answer": "req.error", "trueAnswer": true },
          { "answer": "req.reject", "trueAnswer": false }
        ]
      },
      {
        "id": 42,
        "question": "Which of the following supports non-hierarchical data? Choose the correct answer.",
        "answers": [
          { "answer": "YAML", "trueAnswer": true },
          { "answer": "JSON", "trueAnswer": false },
          { "answer": "Neither YAML nor JSON", "trueAnswer": false }
        ]
      },
      {
        "id": 43,
        "question": "Which files do you modify to store project configurations? Note: There are 2 correct answers.",
        "answers": [
          { "answer": "passport.js", "trueAnswer": false },
          { "answer": "package.json", "trueAnswer": true },
          { "answer": ".cdsrc.json", "trueAnswer": true },
          { "answer": "manifest.json", "trueAnswer": false }
        ]
      },
      {
        "id": 44,
        "question": "Which of the following are principles of cloud computing? Note: There are 2 correct answers.",
        "answers": [
          { "answer": "Microservices", "trueAnswer": true },
          { "answer": "Automation", "trueAnswer": false },
          { "answer": "Integration", "trueAnswer": false },
          { "answer": "Serverless", "trueAnswer": true }
        ]
      },
      {
        "id": 45,
        "question": "How do you add authorization and trust management to your CAP project?",
        "answers": [
          { "answer": "cds add xsuaa", "trueAnswer": true },
          { "answer": "cds add uaa", "trueAnswer": false },
          { "answer": "cds add security", "trueAnswer": false }
        ]
      },
      {
        "id": 46,
        "question": "Which are the Service APIs for Custom Logic? Note: There are 3 correct answers.",
        "answers": [
          { "answer": "Querying API", "trueAnswer": true },
          { "answer": "External Services", "trueAnswer": false },
          { "answer": "Custom API", "trueAnswer": false },
          { "answer": "Event Handling", "trueAnswer": true },
          { "answer": "Messaging API", "trueAnswer": true }
        ]
      },
      {
        "id": 47,
        "question": "What is the actual automation part of SAP Continuous Integration and Delivery? Choose the correct answer.",
        "answers": [
          { "answer": "Configure a branch in the GitHub repository.", "trueAnswer": false },
          { "answer": "Configure a job.", "trueAnswer": true }
        ]
      }
    ],
    A2: [
      {
        id: 1,
        question: "What does 'ability' mean?",
        answers: [
          { answer: "Kabiliyet", trueAnswer: true },
          { answer: "Kısa", trueAnswer: false },
          { answer: "Yorgun", trueAnswer: false },
          { answer: "Zeki", trueAnswer: false },
        ],
      },
      {
        id: 2,
        question: "What does 'accept' mean?",
        answers: [
          { answer: "Reddetmek", trueAnswer: false },
          { answer: "Birleştirmek", trueAnswer: false },
          { answer: "Kabul etmek", trueAnswer: true },
          { answer: "Ayrılmak", trueAnswer: false },
        ],
      },
      {
        id: 3,
        question: "What does 'achieve' mean?",
        answers: [
          { answer: "Kaybetmek", trueAnswer: false },
          { answer: "Başarmak", trueAnswer: true },
          { answer: "Savaşmak", trueAnswer: false },
          { answer: "Dinlenmek", trueAnswer: false },
        ],
      },
      {
        id: 4,
        question: "What does 'add' mean?",
        answers: [
          { answer: "Eklemek", trueAnswer: true },
          { answer: "Çıkarmak", trueAnswer: false },
          { answer: "Karıştırmak", trueAnswer: false },
          { answer: "Kırmak", trueAnswer: false },
        ],
      },
      {
        id: 5,
        question: "What does 'advantage' mean?",
        answers: [
          { answer: "Dezavantaj", trueAnswer: false },
          { answer: "Sorun", trueAnswer: false },
          { answer: "Başarı", trueAnswer: false },
          { answer: "Avantaj", trueAnswer: true },
        ],
      },
      {
        id: 6,
        question: "What does 'apologize' mean?",
        answers: [
          { answer: "Övmek", trueAnswer: false },
          { answer: "Teşvik etmek", trueAnswer: false },
          { answer: "Hediye vermek", trueAnswer: false },
          { answer: "Özür dilemek", trueAnswer: true },
        ],
      },
      {
        id: 7,
        question: "What does 'attract' mean?",
        answers: [
          { answer: "Kurtarmak", trueAnswer: false },
          { answer: "Yardım etmek", trueAnswer: false },
          { answer: "Çekmek", trueAnswer: true },
          { answer: "Sevmek", trueAnswer: false },
        ],
      },
      {
        id: 8,
        question: "What does 'begin' mean?",
        answers: [
          { answer: "Bitirmek", trueAnswer: false },
          { answer: "Başlamak", trueAnswer: true },
          { answer: "Konuşmak", trueAnswer: false },
          { answer: "Düşünmek", trueAnswer: false },
        ],
      },
      {
        id: 9,
        question: "What does 'believe' mean?",
        answers: [
          { answer: "Reddetmek", trueAnswer: false },
          { answer: "Saldırmak", trueAnswer: false },
          { answer: "İnanmak", trueAnswer: true },
          { answer: "Görmek", trueAnswer: false },
        ],
      },
      {
        id: 10,
        question: "What does 'build' mean?",
        answers: [
          { answer: "İnşa etmek", trueAnswer: true },
          { answer: "Yıkıp yok etmek", trueAnswer: false },
          { answer: "Savaşmak", trueAnswer: false },
          { answer: "Yükseltmek", trueAnswer: false },
        ],
      },
      {
        id: 11,
        question: "What does 'call' mean?",
        answers: [
          { answer: "Görmek", trueAnswer: false },
          { answer: "Uygun", trueAnswer: false },
          { answer: "Tutuklamak", trueAnswer: false },
          { answer: "Aramak", trueAnswer: true },
        ],
      },
      {
        id: 12,
        question: "What does 'care' mean?",
        answers: [
          { answer: "Vermek", trueAnswer: false },
          { answer: "Beklemek", trueAnswer: false },
          { answer: "İlgilenmek", trueAnswer: true },
          { answer: "Görmek", trueAnswer: false },
        ],
      },
      {
        id: 13,
        question: "What does 'catch' mean?",
        answers: [
          { answer: "Ayrılmak", trueAnswer: false },
          { answer: "Anlamak", trueAnswer: false },
          { answer: "Yakalamak", trueAnswer: true },
          { answer: "Yapmak", trueAnswer: false },
        ],
      },
      {
        id: 14,
        question: "What does 'choose' mean?",
        answers: [
          { answer: "Kabul etmek", trueAnswer: false },
          { answer: "Seçmek", trueAnswer: true },
          { answer: "Yanıt vermek", trueAnswer: false },
          { answer: "Reddetmek", trueAnswer: false },
        ],
      },
      {
        id: 15,
        question: "What does 'clean' mean?",
        answers: [
          { answer: "Kirletmek", trueAnswer: false },
          { answer: "Bakmak", trueAnswer: false },
          { answer: "Kırmak", trueAnswer: false },
          { answer: "Temizlemek", trueAnswer: true },
        ],
      },
      {
        id: 16,
        question: "What does 'close' mean?",
        answers: [
          { answer: "Kapatmak", trueAnswer: true },
          { answer: "Açmak", trueAnswer: false },
          { answer: "İzlemek", trueAnswer: false },
          { answer: "Birleştirmek", trueAnswer: false },
        ],
      },
      {
        id: 17,
        question: "What does 'cook' mean?",
        answers: [
          { answer: "Boşaltmak", trueAnswer: false },
          { answer: "Pişirmek", trueAnswer: true },
          { answer: "Sıkışmak", trueAnswer: false },
          { answer: "Görmek", trueAnswer: false },
        ],
      },
      {
        id: 18,
        question: "What does 'count' mean?",
        answers: [
          { answer: "Bulmak", trueAnswer: false },
          { answer: "Vurmak", trueAnswer: false },
          { answer: "Yenmek", trueAnswer: false },
          { answer: "Saymak", trueAnswer: true },
        ],
      },
      {
        id: 19,
        question: "What does 'cry' mean?",
        answers: [
          { answer: "Gülümsemek", trueAnswer: false },
          { answer: "Kızgın olmak", trueAnswer: false },
          { answer: "Ağlamak", trueAnswer: true },
          { answer: "Korkmak", trueAnswer: false },
        ],
      },
      {
        id: 20,
        question: "What does 'cut' mean?",
        answers: [
          { answer: "Kesmek", trueAnswer: true },
          { answer: "Yapıştırmak", trueAnswer: false },
          { answer: "Bozmak", trueAnswer: false },
          { answer: "Satmak", trueAnswer: false },
        ],
      },
    ],
    B1: [
      {
        id: 1,
        question: "What does 'accommodation' mean?",
        answers: [
          { answer: "Yemek", trueAnswer: false },
          { answer: "Giyim", trueAnswer: false },
          { answer: "Konaklama", trueAnswer: true },
          { answer: "İş", trueAnswer: false },
        ],
      },
      {
        id: 2,
        question: "What does 'adventure' mean?",
        answers: [
          { answer: "Dostluk", trueAnswer: false },
          { answer: "Macera", trueAnswer: true },
          { answer: "Aşk", trueAnswer: false },
          { answer: "Başarı", trueAnswer: false },
        ],
      },
      {
        id: 3,
        question: "What does 'anxious' mean?",
        answers: [
          { answer: "Endişeli", trueAnswer: true },
          { answer: "Mutlu", trueAnswer: false },
          { answer: "Sakin", trueAnswer: false },
          { answer: "Korkmuş", trueAnswer: false },
        ],
      },
      {
        id: 4,
        question: "What does 'career' mean?",
        answers: [
          { answer: "Okul", trueAnswer: false },
          { answer: "Aile", trueAnswer: false },
          { answer: "Sağlık", trueAnswer: false },
          { answer: "Kariyer", trueAnswer: true },
        ],
      },
      {
        id: 5,
        question: "What does 'comfortable' mean?",
        answers: [
          { answer: "Zor", trueAnswer: false },
          { answer: "Rahat", trueAnswer: true },
          { answer: "Sıcak", trueAnswer: false },
          { answer: "Ağrılı", trueAnswer: false },
        ],
      },
      {
        id: 6,
        question: "What does 'culture' mean?",
        answers: [
          { answer: "Spor", trueAnswer: false },
          { answer: "Kültür", trueAnswer: true },
          { answer: "Yiyecek", trueAnswer: false },
          { answer: "Doğa", trueAnswer: false },
        ],
      },
      {
        id: 7,
        question: "What does 'deduction' mean?",
        answers: [
          { answer: "Tahmin", trueAnswer: false },
          { answer: "Gözlem", trueAnswer: false },
          { answer: "Çıkarım", trueAnswer: true },
          { answer: "Bağış", trueAnswer: false },
        ],
      },
      {
        id: 8,
        question: "What does 'empathy' mean?",
        answers: [
          { answer: "Empati", trueAnswer: true },
          { answer: "Hoşgörü", trueAnswer: false },
          { answer: "Takdir", trueAnswer: false },
          { answer: "Sorgulama", trueAnswer: false },
        ],
      },
      {
        id: 9,
        question: "What does 'frustration' mean?",
        answers: [
          { answer: "Başarı", trueAnswer: false },
          { answer: "Heyecan", trueAnswer: false },
          { answer: "Hayal kırıklığı", trueAnswer: true },
          { answer: "Enerji", trueAnswer: false },
        ],
      },
      {
        id: 10,
        question: "What does 'globalization' mean?",
        answers: [
          { answer: "Bölgeselleşme", trueAnswer: false },
          { answer: "Millileşme", trueAnswer: false },
          { answer: "Uzaklaşma", trueAnswer: false },
          { answer: "Küreselleşme", trueAnswer: true },
        ],
      },
      {
        id: 11,
        question: "What does 'hypothesis' mean?",
        answers: [
          { answer: "Kanıt", trueAnswer: false },
          { answer: "Sonuç", trueAnswer: false },
          { answer: "Hipotez", trueAnswer: true },
          { answer: "Öneri", trueAnswer: false },
        ],
      },
      {
        id: 12,
        question: "What does 'inevitable' mean?",
        answers: [
          { answer: "Kaçınılmaz", trueAnswer: true },
          { answer: "Gerekli", trueAnswer: false },
          { answer: "Olağan", trueAnswer: false },
          { answer: "Yanıltıcı", trueAnswer: false },
        ],
      },
      {
        id: 13,
        question: "What does 'justify' mean?",
        answers: [
          { answer: "Reddetmek", trueAnswer: false },
          { answer: "Düşünmek", trueAnswer: false },
          { answer: "Değiştirmek", trueAnswer: false },
          { answer: "Doğrulamak", trueAnswer: true },
        ],
      },
      {
        id: 14,
        question: "What does 'knowledge' mean?",
        answers: [
          { answer: "Bilgi", trueAnswer: true },
          { answer: "İnanç", trueAnswer: false },
          { answer: "Düşünce", trueAnswer: false },
          { answer: "Deneyim", trueAnswer: false },
        ],
      },
      {
        id: 15,
        question: "What does 'independent' mean?",
        answers: [
          { answer: "Mutlu", trueAnswer: false },
          { answer: "Bağımsız", trueAnswer: true },
          { answer: "Zayıf", trueAnswer: false },
          { answer: "Dinç", trueAnswer: false },
        ],
      },
      {
        id: 16,
        question: "What does 'opportunity' mean?",
        answers: [
          { answer: "Zorluk", trueAnswer: false },
          { answer: "Fırsat", trueAnswer: true },
          { answer: "Hedef", trueAnswer: false },
          { answer: "Güzel", trueAnswer: false },
        ],
      },
      {
        id: 17,
        question: "What does 'responsible' mean?",
        answers: [
          { answer: "Kıskanç", trueAnswer: false },
          { answer: "Sevgi dolu", trueAnswer: false },
          { answer: "Sorumlu", trueAnswer: true },
          { answer: "Cesur", trueAnswer: false },
        ],
      },
      {
        id: 18,
        question: "What does 'sufficient' mean?",
        answers: [
          { answer: "Zor", trueAnswer: false },
          { answer: "Kötü", trueAnswer: false },
          { answer: "Zengin", trueAnswer: false },
          { answer: "Yeterli", trueAnswer: true },
        ],
      },
      {
        id: 19,
        question: "What does 'tradition' mean?",
        answers: [
          { answer: "Dans", trueAnswer: false },
          { answer: "Gelenek", trueAnswer: true },
          { answer: "Güzel", trueAnswer: false },
          { answer: "Müzik", trueAnswer: false },
        ],
      },
      {
        id: 20,
        question: "What does 'vocabulary' mean?",
        answers: [
          { answer: "Resim", trueAnswer: false },
          { answer: "Kelime hazinesi", trueAnswer: true },
          { answer: "Kitap", trueAnswer: false },
          { answer: "Yemek tarifi", trueAnswer: false },
        ],
      },
    ],
    B2: [
      {
        id: 1,
        question: "What does 'acquaintance' mean?",
        answers: [
          { answer: "Tanışıklık", trueAnswer: true },
          { answer: "Eşlik", trueAnswer: false },
          { answer: "Özgünlük", trueAnswer: false },
          { answer: "Çıkarım", trueAnswer: false },
        ],
      },
      {
        id: 2,
        question: "Which one is the meaning of 'consequence'?",
        answers: [
          { answer: "Mantık", trueAnswer: false },
          { answer: "Sonuç", trueAnswer: true },
          { answer: "Soruşturma", trueAnswer: false },
          { answer: "Tedavi", trueAnswer: false },
        ],
      },
      {
        id: 3,
        question: "What is the meaning of 'nervous'?",
        answers: [
          { answer: "Tembel", trueAnswer: false },
          { answer: "Hırslı", trueAnswer: false },
          { answer: "Sinirli", trueAnswer: true },
          { answer: "Çalışkan", trueAnswer: false },
        ],
      },
      {
        id: 4,
        question: "Which one is the meaning of 'Complicated'?",
        answers: [
          { answer: "Karmaşık", trueAnswer: true },
          { answer: "Basit", trueAnswer: false },
          { answer: "Ayrıntılı", trueAnswer: false },
          { answer: "Hızlı", trueAnswer: false },
        ],
      },
      {
        id: 5,
        question: "What does 'fluctuate' mean?",
        answers: [
          { answer: "Değişkenlik göstermek", trueAnswer: true },
          { answer: "İzlemek", trueAnswer: false },
          { answer: "İddia etmek", trueAnswer: false },
          { answer: "Harcamak", trueAnswer: false },
        ],
      },
      {
        id: 6,
        question: "Which one is the meaning of 'humble'?",
        answers: [
          { answer: "Alçakgönüllü", trueAnswer: true },
          { answer: "Dürüst", trueAnswer: false },
          { answer: "Kibirli", trueAnswer: false },
          { answer: "Akıllı", trueAnswer: false },
        ],
      },
      {
        id: 7,
        question: "What is the meaning of 'incorporate'?",
        answers: [
          { answer: "Ayırmak", trueAnswer: false },
          { answer: "Küçülmek", trueAnswer: false },
          { answer: "İçermek", trueAnswer: true },
          { answer: "Anlaşmak", trueAnswer: false },
        ],
      },
      {
        id: 8,
        question: "Which one is the meaning of 'justifiable'?",
        answers: [
          { answer: "Sorgulanabilir", trueAnswer: false },
          { answer: "Kabul edilebilir", trueAnswer: true },
          { answer: "Yenilmez", trueAnswer: false },
          { answer: "Makul", trueAnswer: false },
        ],
      },
      {
        id: 9,
        question: "What does 'legacy' mean?",
        answers: [
          { answer: "Mirasa konmak", trueAnswer: false },
          { answer: "Tarih", trueAnswer: false },
          { answer: "Miras bırakmak", trueAnswer: false },
          { answer: "Kalıt", trueAnswer: true },
        ],
      },
      {
        id: 10,
        question: "Which one is the meaning of 'manifest'?",
        answers: [
          { answer: "Gizli", trueAnswer: false },
          { answer: "Açık", trueAnswer: true },
          { answer: "İstenmeyen", trueAnswer: false },
          { answer: "Özür dilemek", trueAnswer: false },
        ],
      },
      {
        id: 11,
        question: "What is the meaning of 'notorious'?",
        answers: [
          { answer: "Ünlü", trueAnswer: false },
          { answer: "Gizemli", trueAnswer: false },
          { answer: "Kötü ün salmış", trueAnswer: true },
          { answer: "Sevgi dolu", trueAnswer: false },
        ],
      },
      {
        id: 12,
        question: "Which one is the meaning of 'obstruct'?",
        answers: [
          { answer: "Engellemek", trueAnswer: true },
          { answer: "Onaylamak", trueAnswer: false },
          { answer: "Arttırmak", trueAnswer: false },
          { answer: "Saldırmak", trueAnswer: false },
        ],
      },
      {
        id: 13,
        question: "What does 'profound' mean?",
        answers: [
          { answer: "Anlamsız", trueAnswer: false },
          { answer: "Derin", trueAnswer: true },
          { answer: "Galiz", trueAnswer: false },
          { answer: "Kaba", trueAnswer: false },
        ],
      },
      {
        id: 14,
        question: "Which one is the meaning of 'rational'?",
        answers: [
          { answer: "Mantıklı", trueAnswer: true },
          { answer: "İkna edici", trueAnswer: false },
          { answer: "Karanlık", trueAnswer: false },
          { answer: "Küçültülmüş", trueAnswer: false },
        ],
      },
      {
        id: 15,
        question: "What is the meaning of 'speculate'?",
        answers: [
          { answer: "Kurban etmek", trueAnswer: false },
          { answer: "Aksettirmek", trueAnswer: false },
          { answer: "Tahmin etmek", trueAnswer: true },
          { answer: "Söz vermek", trueAnswer: false },
        ],
      },
      {
        id: 16,
        question: "Which one is the meaning of 'trivial'?",
        answers: [
          { answer: "Zorla yapılan", trueAnswer: false },
          { answer: "Değerli", trueAnswer: false },
          { answer: "Utangaç", trueAnswer: false },
          { answer: "Önemsiz", trueAnswer: true },
        ],
      },
      {
        id: 17,
        question: "What does 'ultimate' mean?",
        answers: [
          { answer: "Nihai", trueAnswer: true },
          { answer: "Gecikmiş", trueAnswer: false },
          { answer: "Çarpıcı", trueAnswer: false },
          { answer: "Dikkate değmez", trueAnswer: false },
        ],
      },
      {
        id: 18,
        question: "Which one is the meaning of 'vague'?",
        answers: [
          { answer: "Kaba", trueAnswer: false },
          { answer: "Net olmayan", trueAnswer: true },
          { answer: "Yaşlı", trueAnswer: false },
          { answer: "Adil", trueAnswer: false },
        ],
      },
      {
        id: 19,
        question: "What is the meaning of 'widespread'?",
        answers: [
          { answer: "Kısıtlı", trueAnswer: false },
          { answer: "Yaygın", trueAnswer: true },
          { answer: "Farklı", trueAnswer: false },
          { answer: "Azalmış", trueAnswer: false },
        ],
      },
      {
        id: 20,
        question: "Which one is the meaning of 'vivid'?",
        answers: [
          { answer: "Canlı", trueAnswer: true },
          { answer: "Büyüleyici", trueAnswer: false },
          { answer: "Karışık", trueAnswer: false },
          { answer: "Olumsuz", trueAnswer: false },
        ],
      },
    ],
    C1: [
      {
        id: 1,
        question: "What is the meaning of the word 'conjecture'?",
        answers: [
          { answer: "gerçek", trueAnswer: false },
          { answer: "tahmin", trueAnswer: true },
          { answer: "yalan", trueAnswer: false },
          { answer: "karar", trueAnswer: false },
        ],
      },
      {
        id: 2,
        question: "What does the word 'diligent' mean?",
        answers: [
          { answer: "tembel", trueAnswer: false },
          { answer: "çalışkan", trueAnswer: true },
          { answer: "yavaş", trueAnswer: false },
          { answer: "kaygılı", trueAnswer: false },
        ],
      },
      {
        id: 3,
        question: "What is the meaning of the word 'elaborate'?",
        answers: [
          { answer: "basit", trueAnswer: false },
          { answer: "karmaşık", trueAnswer: true },
          { answer: "sıkıcı", trueAnswer: false },
          { answer: "uygun", trueAnswer: false },
        ],
      },
      {
        id: 4,
        question: "What does the word 'feasible' mean?",
        answers: [
          { answer: "mantıklı", trueAnswer: true },
          { answer: "anlamsız", trueAnswer: false },
          { answer: "tehlikeli", trueAnswer: false },
          { answer: "garip", trueAnswer: false },
        ],
      },
      {
        id: 5,
        question: "What is the meaning of the word 'gregarious'?",
        answers: [
          { answer: "kendine dönük", trueAnswer: false },
          { answer: "samimi", trueAnswer: false },
          { answer: "güvenilir", trueAnswer: false },
          { answer: "sosyal", trueAnswer: true },
        ],
      },
      {
        id: 6,
        question: "What does the word 'hackneyed' mean?",
        answers: [
          { answer: "orijinal", trueAnswer: false },
          { answer: "sıkıcı", trueAnswer: true },
          { answer: "güçlü", trueAnswer: false },
          { answer: "zararsız", trueAnswer: false },
        ],
        trueAnswer: "sıkıcı",
      },
      {
        id: 7,
        question: "What is the meaning of the word 'imminent'?",
        answers: [
          { answer: "gizli", trueAnswer: false },
          { answer: "olması yakın", trueAnswer: true },
          { answer: "açık", trueAnswer: false },
          { answer: "başarılı", trueAnswer: false },
        ],
      },
      {
        id: 8,
        question: "What does the word 'inquisitive' mean?",
        answers: [
          { answer: "meraklı", trueAnswer: true },
          { answer: "korkak", trueAnswer: false },
          { answer: "aşırı", trueAnswer: false },
          { answer: "kendine güvenen", trueAnswer: false },
        ],
      },
      {
        id: 9,
        question: "What is the meaning of the word 'juxtapose'?",
        answers: [
          { answer: "birleştirmek", trueAnswer: false },
          { answer: "ayrı tutmak", trueAnswer: false },
          { answer: "yan yana koymak", trueAnswer: true },
          { answer: "düşman yapmak", trueAnswer: false },
        ],
      },
      {
        id: 10,
        question: "What does the word 'keen' mean?",
        answers: [
          { answer: "anlamsız", trueAnswer: false },
          { answer: "kararlı", trueAnswer: false },
          { answer: "keskin", trueAnswer: true },
          { answer: "huzursuz", trueAnswer: false },
        ],
      },
      {
        id: 11,
        question: "What is the meaning of the word 'lucid'?",
        answers: [
          { answer: "belirsiz", trueAnswer: false },
          { answer: "karanlık", trueAnswer: false },
          { answer: "anlaşılır", trueAnswer: true },
          { answer: "çoklu", trueAnswer: false },
        ],
      },
      {
        id: 12,
        question: "What does the word 'malleable' mean?",
        answers: [
          { answer: "uyumsuz", trueAnswer: false },
          { answer: "esnek", trueAnswer: true },
          { answer: "düzensiz", trueAnswer: false },
          { answer: "dostça", trueAnswer: false },
        ],
      },
      {
        id: 13,
        question: "What is the meaning of the word 'nostalgia'?",
        answers: [
          { answer: "özlem", trueAnswer: true },
          { answer: "kin", trueAnswer: false },
          { answer: "heyecan", trueAnswer: false },
          { answer: "küçümseme", trueAnswer: false },
        ],
      },
      {
        id: 14,
        question: "What does the word 'obscure' mean?",
        answers: [
          { answer: "açık", trueAnswer: false },
          { answer: "belirsiz", trueAnswer: true },
          { answer: "anlaşılır", trueAnswer: false },
          { answer: "övülmüş", trueAnswer: false },
        ],
      },
      {
        id: 15,
        question: "What is the meaning of the word 'pensive'?",
        answers: [
          { answer: "düşünceli", trueAnswer: true },
          { answer: "korkak", trueAnswer: false },
          { answer: "neşeli", trueAnswer: false },
          { answer: "şüpheli", trueAnswer: false },
        ],
      },
      {
        id: 16,
        question: "What does the word 'quaint' mean?",
        answers: [
          { answer: "gösterişli", trueAnswer: false },
          { answer: "yabancı", trueAnswer: false },
          { answer: "tuhaftır", trueAnswer: true },
          { answer: "yüksek", trueAnswer: false },
        ],
      },
      {
        id: 17,
        question: "What is the meaning of the word 'applaud'?",
        answers: [
          { answer: "iyimser", trueAnswer: false },
          { answer: "dayanıklı", trueAnswer: false },
          { answer: "Alkışlamak", trueAnswer: true },
          { answer: "aptal", trueAnswer: false },
        ],
      },
      {
        id: 18,
        question: "What does the word 'superfluous' mean?",
        answers: [
          { answer: "gerekli", trueAnswer: false },
          { answer: "gereksiz", trueAnswer: true },
          { answer: "başarılı", trueAnswer: false },
          { answer: "talihsiz", trueAnswer: false },
        ],
      },
      {
        id: 19,
        question: "What is the meaning of the word 'tedious'?",
        answers: [
          { answer: "heyecanlı", trueAnswer: false },
          { answer: "sıkıcı", trueAnswer: true },
          { answer: "anlamsız", trueAnswer: false },
          { answer: "sorunlu", trueAnswer: false },
        ],
      },
      {
        id: 20,
        question: "What does the word 'diminish' mean?",
        answers: [
          { answer: "nadir", trueAnswer: false },
          { answer: "Azaltmak", trueAnswer: true },
          { answer: "kötü niyetli", trueAnswer: false },
          { answer: "ünlü", trueAnswer: false },
        ],
      },
    ],
    C2: [
      {
        id: 1,
        question: "What is the meaning of the word 'abundant'?",
        answers: [
          { answer: "yetersiz", trueAnswerr: false },
          { answer: "kısıtlı", trueAnswerr: false },
          { answer: "dar", trueAnswerr: false },
          { answer: "bol", trueAnswerr: true },
        ],
      },
      {
        id: 2,
        question: "What does the word 'exquisite' mean?",
        answers: [
          { answer: "iğrenç", trueAnswerr: false },
          { answer: "yumuşak", trueAnswerr: false },
          { answer: "zarif", trueAnswerr: true },
          { answer: "keskin", trueAnswerr: false },
        ],
      },
      {
        id: 3,
        question: "What is the definition of 'conundrum'?",
        answers: [
          { answer: "bulmaca", trueAnswerr: true },
          { answer: "basit problem", trueAnswerr: false },
          { answer: "çoklu seçenek", trueAnswerr: false },
          { answer: "doğru cevap", trueAnswerr: false },
        ],
      },
      {
        id: 4,
        question: "What is the meaning of the word 'elated'?",
        answers: [
          { answer: "ümitli", trueAnswerr: false },
          { answer: "üzgün", trueAnswerr: false },
          { answer: "coşkulu", trueAnswerr: true },
          { answer: "sinirli", trueAnswerr: false },
        ],
      },
      {
        id: 5,
        question: "What does the word 'affluent' mean?",
        answers: [
          { answer: "fakir", trueAnswerr: false },
          { answer: "zengin", trueAnswerr: true },
          { answer: "yorgun", trueAnswerr: false },
          { answer: "sağlıklı", trueAnswerr: false },
        ],
      },
      {
        id: 6,
        question: "What is the definition of 'exasperate'?",
        answers: [
          { answer: "şaşırmak", trueAnswerr: false },
          { answer: "korkutmak", trueAnswerr: false },
          { answer: "öfkelendirmek", trueAnswerr: true },
          { answer: "rahatlatmak", trueAnswerr: false },
        ],
      },
      {
        id: 7,
        question: "What is the meaning of the word 'resilient'?",
        answers: [
          { answer: "kırılgan", trueAnswerr: false },
          { answer: "uyumlu", trueAnswerr: false },
          { answer: "zayıf", trueAnswerr: false },
          { answer: "dayanıklı", trueAnswerr: true },
        ],
      },
      {
        id: 8,
        question: "What does the word 'ominous' mean?",
        answers: [
          { answer: "tuhaf", trueAnswerr: false },
          { answer: "iyimser", trueAnswerr: false },
          { answer: "tehlikeli", trueAnswerr: true },
          { answer: "yıkıcı", trueAnswerr: false },
        ],
      },
      {
        id: 9,
        question: "What is the definition of 'scrutinize'?",
        answers: [
          { answer: "gözlemlemek", trueAnswerr: false },
          { answer: "dışlamak", trueAnswerr: false },
          { answer: "incelemek", trueAnswerr: true },
          { answer: "hızlandırmak", trueAnswerr: false },
        ],
      },
      {
        id: 10,
        question: "What is the meaning of the word 'prolific'?",
        answers: [
          { answer: "verimli", trueAnswerr: true },
          { answer: "dikkatsiz", trueAnswerr: false },
          { answer: "zayıf", trueAnswerr: false },
          { answer: "önemsiz", trueAnswerr: false },
        ],
      },
      {
        id: 11,
        question: "What does the word 'impeccable' mean?",
        answers: [
          { answer: "kötü", trueAnswerr: false },
          { answer: "hatasız", trueAnswerr: true },
          { answer: "endişeli", trueAnswerr: false },
          { answer: "sevgi dolu", trueAnswerr: false },
        ],
      },
      {
        id: 12,
        question: "What is the definition of 'perplexed'?",
        answers: [
          { answer: "şaşkın", trueAnswerr: true },
          { answer: "sıkılmış", trueAnswerr: false },
          { answer: "korkmuş", trueAnswerr: false },
          { answer: "özgüvenli", trueAnswerr: false },
        ],
      },
      {
        id: 13,
        question: "What is the meaning of the word 'mundane'?",
        answers: [
          { answer: "anlamsız", trueAnswerr: false },
          { answer: "eğlenceli", trueAnswerr: false },
          { answer: "özgün", trueAnswerr: false },
          { answer: "sıradan", trueAnswerr: true },
        ],
      },
      {
        id: 14,
        question: "What does the word 'quintessential' mean?",
        answers: [
          { answer: "temel", trueAnswerr: true },
          { answer: "karmaşık", trueAnswerr: false },
          { answer: "kaba", trueAnswerr: false },
          { answer: "havalı", trueAnswerr: false },
        ],
      },
      {
        id: 15,
        question: "What is the definition of the word 'ephemeral'?",
        answers: [
          { answer: "geçici", trueAnswerr: true },
          { answer: "kalıcı", trueAnswerr: false },
          { answer: "kötü", trueAnswerr: false },
          { answer: "yararlı", trueAnswerr: false },
        ],
      },
      {
        id: 16,
        question: "What is the meaning of the word 'verbose'?",
        answers: [
          { answer: "anlaşılır", trueAnswerr: false },
          { answer: "kesin", trueAnswerr: false },
          { answer: "açık", trueAnswerr: false },
          { answer: "aşırı sözlü", trueAnswerr: true },
        ],
      },
      {
        id: 17,
        question: "What does the word 'quell' mean?",
        answers: [
          { answer: "yaralamak", trueAnswerr: false },
          { answer: "yapıştırmak", trueAnswerr: false },
          { answer: "yatıştırmak", trueAnswerr: true },
          { answer: "yükseltmek", trueAnswerr: false },
        ],
      },
      {
        id: 18,
        question: "What is the meaning of the word 'ennui'?",
        answers: [
          { answer: "heyecan", trueAnswerr: false },
          { answer: "can sıkıntısı", trueAnswerr: true },
          { answer: "mutluluk", trueAnswerr: false },
          { answer: "merak", trueAnswerr: false },
        ],
      },
      {
        id: 19,
        question: "What does the word 'idiosyncrasy' mean?",
        answers: [
          { answer: "deneyim", trueAnswerr: false },
          { answer: "alışkanlık", trueAnswerr: false },
          { answer: "tuhaflık", trueAnswerr: true },
          { answer: "zeka", trueAnswerr: false },
        ],
      },
      {
        id: 20,
        question: "What is the meaning of the word 'ubiquitous'?",
        answers: [
          { answer: "anlık", trueAnswerr: false },
          { answer: "evrensel", trueAnswerr: true },
          { answer: "sınırlı", trueAnswerr: false },
          { answer: "belirgin", trueAnswerr: false },
        ],
      },
    ],
  };

  const sharedValuesAndMethods = {
    questions,
    currentQuestion,
    setCurrentQuestion,
  };

  return (
    <QuizContext.Provider value={sharedValuesAndMethods}>
      {children}
    </QuizContext.Provider>
  );
}

const useQuizContext = () => useContext(QuizContext);
export { Provider, useQuizContext };
export default QuizContext;
