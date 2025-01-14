import portfolioPic from '../images/portfolio_pic.png';
import azureDsPic from '../images/azure_ds_pic.png';
import neurPic from '../images/neur_pic.png';
import walmartPic from '../images/walmart_pic.png';
import elPic from '../images/el_pic.png';
import atPic from '../images/at_pic.png';
import libmanPic from '../images/libman_pic.png';
import emotionPic from '../images/emotion_pic.png';
import blogPic from '../images/blog_pic.png';
import tmPic from '../images/tm_pic.png';
import moviePic from '../images/movie_pic.png';
import netbeansPic from '../images/netbeans_pic.png';


const cards = [
    {
        img : portfolioPic,
        heading : 'My Portfolio',
        about : 'My personal portfolio coded in React',
        link : 'https://github.com/shemzegem200/My-Portfolio',
        liked : false
    },
    {
        img : azureDsPic,
        heading : 'Azure Data engineering',
        about : 'Perform ETL on data using resources like Data Factory, Synapse Analytics, Databricks, Blobs, etc',
        link : 'https://github.com/shemzegem200/tokyo-olympic-azure-data-engineering-project',
        liked : false
    },
    {
        img : neurPic,
        heading : 'Neur XR Studios portfolio',
        about : 'Coded a responsive portfolio website for Neur XR Studios',
        link : 'https://github.com/shemzegem200/Neur-XR-Studios-portfolio',
        liked : false
    },
    {
        img : walmartPic,
        heading : 'Walmart Supply Chain Management',
        about : 'View business metrics, track orders, and monitor warehouses in real time',
        link : 'https://www.youtube.com/watch?v=QBYpknOIdbA',
        liked : false
    },
    {
        img : elPic,
        heading : 'Elite Footwear',
        about : 'An online e-commerce website to sell shoes',
        link : 'https://github.com/shemzegem200/EliteFootwear-FRONTEND',
        liked : false
    },
    {
        img : atPic,
        heading : 'AlgoTracker',
        about : 'Understand the concept of backtracking by visualising how a sudoku board is solved',
        link : 'https://github.com/shemzegem200/AlgoTracker',
        liked : false
    },
    {
        img : libmanPic,
        heading : 'LibMan',
        about : 'A library management system coded entirely using Java',
        link : 'https://github.com/shemzegem200/Lib-man',
        liked : false
    },
    {
        img : emotionPic,
        heading : 'Emotion Detection',
        about : 'Given an image input of a portrait, predict the emotion of the client',
        link : 'https://github.com/shemzegem200/Emotion-detection',
        liked : false
    },
    {
        img : blogPic,
        heading : 'Blog Site',
        about : 'Developed using the MERN stack where users can create, view, update and delete posts online',
        link : 'https://github.com/shemzegem200/Blog-Site',
        liked : false
    },
    {
        img : tmPic,
        heading : 'Textify Me',
        about : 'Transforms images from the user\'s gallery into captivating ASCII images',
        link : 'https://github.com/shemzegem200/Textify-Me',
        liked : false
    },
    {
        img : moviePic,
        heading : 'Movie Review Website',
        about : 'A full stack application where users can search and review movies online',
        link : 'https://github.com/shemzegem200/Movies-BACKEND',
        liked : false
    },
    {
        img : netbeansPic,
        heading : 'Library Management System - Netbeans',
        about : 'Library management system coded in Java in the Netbeans code editor involves advanced SQL',
        link : 'https://github.com/shemzegem200/Library-Management-System-NETBEANS',
        liked : false
    }
];

export default cards
