export default [
    {
        id: 'voice-style-transfer',
        name: 'Voice Style Transfer',
        link: 'https://github.com/SETURAJ/Voice-Style-Transfer',
        tech: ['Python', 'CUDA', 'PyTorch', 'GAN'],
        start_date: 'March 2024',
        end_date: 'April 2024',
        description: [
            'Implemented a multilingual voice style transfer, capturing the voice style of English speakers and applying it to Mandarincontent, preserving the speakers’ native accents while delivering Mandarin speech.',
            'Generated the audio using a WaveNet vocoder leveraging convolutional neural networks and HiFi-GAN model based on GAN architecture to enhance the high-fidelity audio output.',
            'An individual can connect with other users by liking their posts, following their profiles, and chatting with them.',
            'Rigorously evaluated model performance using key metrics such as MCD, PESQ, STOI, and MSE.',
        ],
        functionalities: [
        ],
        steps_to_start: [
        ],
        img: [
        ],
    },
    {
        id: 'vertex-cover-problem',
        name: 'Vertex Cover Problem',
        link: 'https://github.com/SETURAJ/Vertex-Cover-Problem',
        tech: ['C++', 'CMake', 'Multithreading', 'Graph Algorithms', 'SAT Solver'],
        start_date: 'October 2023',
        end_date: 'November 2023',
        description: [
            'Utilized NP-complete Vertex Cover to strategically position cameras for monitoring city traffic, deploying graph algorithms for precise distance calculations.',
            'Optimized Boolean Satisfiability solver to reduce time complexity for larger datasets, reduced processing time from 10ˆ7ms to 10ˆ2ms for vertices (<15), and transformed constraints to yield results within seconds for vertices >20.',
            'Implemented multithreading to parallelize the computation process.',
        ],
        functionalities: [
        ],
        steps_to_start: [
        ],
        img: [
        ],
    },
    {
        id: 'CityEase-services',
        name: 'CityEase Services',
        link: 'https://github.com/SETURAJ/Online-Home-Services-App',
        tech: ['Javascript', 'ReactJs', 'MongoDB', 'ExpressJs', 'NodeJs'],
        start_date: 'March 2022',
        end_date: 'May 2022',
        description: [
            'This project is developed in MERN stack',
            'This web app offers two types of settings, users are able to book the services available nearby their area while the srvice providers can add their services.',
        ],
        functionalities: [
            'Login with Google, Facebook, Email, Password',
            'Google Map API for location',
            'Stripe API for payment',
        ],
        steps_to_start: [],
        img: [
            'https://engineering.rently.com/wp-content/uploads/2022/11/GoogleMapApi.jpg',
            'https://mobisoftinfotech.com/resources/wp-content/uploads/2018/10/apps.png',
        ],
    },
    {
        id: 'doctor-bot',
        name: 'Doctor Bot',
        link: 'https://github.com/SETURAJ/Deep-Learning-Doctor-Bot',
        tech: ['Python', 'Flask', 'Tensorflow', 'SKLearn', 'Keras', 'Juypter-notebook'],
        start_date: 'May 2022',
        end_date: 'July 2022',
        description: [
            'A deep learning-based chatbot that can converse with users and assess their health issues.',
            'Based on the user-entered symptoms, the bot will predict the disease\'s probability value and offer precautionary measures.',
            'The bot utilised Support Vector Machine and Gradient Boosting ML algorithms from sklearn python language library to predict the resultant value.',
        ],
        functionalities: [],
        steps_to_start: [],
        img: [
            'https://miro.medium.com/max/828/1*-k3wB3wvGEoZrosGBdCVoA.webp'
        ],
    },
    {
        id: 'nftmarketplace',
        name: 'NFTMarketplace',
        link: 'https://github.com/SETURAJ/NFT-MARKET-PLACE',
        tech: ['NextJS', 'Ethereum', 'Solidity', 'HardHat', 'Tailwindcss'],
        start_date: 'June 2022',
        end_date: 'July 2022',
        description: [
            'Implemented Web3 login using Metamask and used ERC721 token.',
            'The front end was made using NextJs technology while Solidity was used for the backend.',
            'Hardhat was used for testing contracts and test accounts for buying and selling on localhost.',
            'The user can buy and sell NFTs on the website and the payment will be done via Ethereum coins using MetamaskWallet',
        ],
        functionalities: [
            'Login with metamask',
            'sell NFTs',
            'buy NFTs',
        ],
        steps_to_start: [
            {
                no: 1,
                description: 'Clone Repository',
                code: 'git clone https://github.com/SETURAJ/NFT-MARKET-PLACE'
            },
            {
                no: 2,
                description: 'To Start project',
                code: 'npm run dev'
            },
            {
                no: 3,
                description: 'To get metamask account for development',
                code: 'npx hardhat node'
            },
        ],
        img: [
            'https://agentestudio.com/uploads/post/image/187/main_Article_Covers_NFT.png'
        ],
        video: '',
    },
    {
        id: 'classroom',
        name: 'Classroom',
        link: 'https://github.com/SETURAJ/WCF-Classroom',
        tech: ['C#', '.NET', 'SQL'],
        start_date: 'October 2021',
        end_date: 'December 2021',
        description: [
            'This project is developed in .NET and used SQL Server as a database.',
            'The teacher has admin access and can add/upload or delete a assignment while the student can submit the assignment and can delete the assignment.',
        ],
        functionalities: [
            'Login, Register, Logout',
            'Update profile, Upload ProfilePicture',
            'Add, Delete, Update Assignment',
            'Submit, Delete Assignment',
        ],
        steps_to_start: [
        ],
        img: [
            'https://raw.githubusercontent.com/SETURAJ/WCF-Classroom/main/Wcf_classroom_CE079_CE083/Client/Client/assets/images/home.gif',
        ],
    },
   
]