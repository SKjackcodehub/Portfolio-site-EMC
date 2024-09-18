import bulkMailing from "./assets/BulkMailing.png"
import greenden from "./assets/Greenden.png"
import nostra from "./assets/Nostra.png"
import tripAdvisorClone from "./assets/TripAdvisorClone.png"
import subscribePage from "./assets/SubscribePage.png"
import udemyClone from "./assets/UdemyClone.png"
import weatherApp from "./assets/WeatherApp.png"

export default function Projects() {
    return (
        <section id="projects"
                 className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
            <h2 className="text-5xl text-purple-500 font-bold text-center">
                My Projects
            </h2>
            <div className="p-10 bg-purple-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href="https://github.com/SKjackcodehub/bulkmailing-app-emc"
                        className="w-full h-full">
                        <img src={bulkMailing}
                             alt="Project 1"
                             className="w-full h-full 
                                        bg-cover rounded"/>
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href="https://github.com/SKjackcodehub/bulkmailing-app-emc">Bulk Mailing App </a>
                    </h2>
                    <p>
                    A bulk mailing app using full-stack technologies involves building both front-end and back-end components to manage email campaigns. The front end is designed for uploading mailing lists, composing emails, and tracking, using HTML, CSS, JavaScript, or frameworks like React. The back-end, built with Node.js or Python (e.g., Express or Django), handles email scheduling, logic, and database management with recipient data stored in MySQL or MongoDB. Email APIs like SendGrid or Mailgun are used for sending, while job scheduling tools manage batch processing. 
                    </p>
                </div>
            </div>
           
            <div className="p-10 bg-purple-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href="https://github.com/SKjackcodehub/Greenpen-site-EMC"
                       className="w-full h-full">
                        <img src={greenden}
                             alt="Project 2"
                             className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href="https://github.com/SKjackcodehub/Greenpen-site-EMC">
                            Greenden App
                        </a>
                    </h2>
                    <p>
                    A GreenDen app for plant sales using HTML, CSS, and Tailwind involves building a responsive, user-friendly interface to showcase plants for sale. The front-end is designed using HTML for structure, CSS for styling, and Tailwind CSS to ensure responsiveness and modern design patterns. It includes sections for plant listings, a shopping cart, and user reviews. Tailwind's utility classes make it easy to create reusable components and consistent design across the site. Additionally, interactive features like sorting and filtering plants by category can be implemented using JavaScript, providing a seamless shopping experience for users.
                    </p>
                </div>
            </div>
            <div className="p-10 bg-purple-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href="https://github.com/SKjackcodehub/Nostra-EMC"
                        className="w-full h-full">
                        <img src={nostra}
                             alt="Project 1"
                             className="w-full h-full 
                                        bg-cover rounded"/>
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href="https://github.com/SKjackcodehub/Nostra-EMC">
                            Nostra App
                        </a>
                    </h2>
                    <p>
                    A Nostra dress shopping app using HTML, CSS, and Tailwind involves creating a sleek and modern interface for showcasing and selling dresses. The front-end is structured with HTML, styled with custom CSS, and enhanced using Tailwind CSS for responsive layouts and consistent design. Key features include product galleries, a shopping cart, and customer reviews, all styled to offer a premium shopping experience. Tailwind's utility classes ensure flexibility in creating a visually appealing layout.
                    </p>
                </div>
            </div>
            <div className="p-10 bg-purple-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href="https://github.com/SKjackcodehub/Udemy-clone--EMC-"
                       className="w-full h-full">
                        <img src={udemyClone}
                             alt="Project 2"
                             className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href="https://github.com/SKjackcodehub/Udemy-clone--EMC-">
                           Udemy Clone
                        </a>
                    </h2>
                    <p>
                    A Udemy clone using just HTML and CSS focuses on creating a static platform for showcasing online courses. HTML structures the pages, including a course catalog, individual course details, and user profile sections. CSS is used to style the site, ensuring a clean, modern look with a responsive layout that works well on both desktop and mobile devices using media queries. The course listings can be displayed in grid or list formats, with CSS controlling hover effects, card designs, and typography. 
                    </p>
                </div>
            </div>
            <div className="p-10 bg-purple-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href="https://github.com/SKjackcodehub/weatherjs_react-EMC"
                        className="w-full h-full">
                        <img src={weatherApp}
                             alt="Project 1"
                             className="w-full h-full 
                                        bg-cover rounded"/>
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href="https://github.com/SKjackcodehub/weatherjs_react-EMC">
                            Weather App
                        </a>
                    </h2>
                    <p>
                    A weather app using React.js involves building a dynamic interface where users can search for and view weather conditions for different locations. React components manage the structure, such as a search bar for city names, a display area for current weather data, and icons for weather conditions. The app fetches live weather data from APIs like OpenWeatherMap or WeatherAPI using fetch or axios to retrieve and display real-time temperature, humidity, and forecast information. State management with useState and useEffect ensures that data updates and renders efficiently.
                    </p>
                </div>
            </div>
            <div className="p-10 bg-purple-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href="https://github.com/SKjackcodehub/Subscription-card-EMC-"
                       className="w-full h-full">
                        <img src={subscribePage}
                             alt="Project 2"
                             className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href="https://github.com/SKjackcodehub/Subscription-card-EMC-">
                           Subscribe Page
                        </a>
                    </h2>
                    <p>
                        A subscription card using HTML and CSS is a visually appealing component designed to encourage users to sign up for a service or product. The HTML structure includes a container with a title, a brief description, a list of benefits, and a call-to-action button. CSS styles this card by defining its layout, such as setting a maximum width, adding padding, and applying a border with rounded corners. It often includes a subtle box-shadow for depth and uses text alignment to center the content.
                    </p>
                </div>
            </div>
            <div className="p-10 bg-purple-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href="https://skjackcodehub.github.io/ImageGallery_reactjs-EMC/"
                        className="w-full h-full">
                        <img src={tripAdvisorClone}
                             alt="Project 1"
                             className="w-full h-full 
                                        bg-cover rounded"/>
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href="https://github.com/SKjackcodehub/ImageGallery-EMC">
                            Trip Advisor Clone
                        </a>
                    </h2>
                    <p>
                    A TripAdvisor clone using HTML and CSS involves creating a static version of a travel review platform. The layout includes a header for navigation, a main content area for featured destinations and reviews, and a footer with additional information. CSS is used to design the layout responsively with Flexbox or Grid, ensuring a clean appearance. Typography and styling for images, cards, and buttons enhance the visual appeal. This setup provides a structured and engaging interface for users to explore travel options and reviews.
                    </p>
                </div>
            </div>
        </section>
    );
}
