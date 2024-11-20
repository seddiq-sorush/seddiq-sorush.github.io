export interface Experience {
    title: string;
    description: string;
    icon: string
}


export const experiences: Experience[] = [
    {
        title:
            'Senior Backend Developer <br /> <span class="font-normal">Apple, Sunnyvale, CA</span> <br /> <span class="text-sm font-normal">2023 - Present</span>',
        description: `<ul class="list-disc">
      <li>Successfully implemented OAuth 2.0 and OpenID Connect to enhance security and access control within a few internal apps. This
resulted in a robust authentication and authorization mechanism that ensured the confidentiality and integrity of user data.</li>
      <li>Developed a backend system, leveraging cutting-edge technologies, including Node JS, Express, PostgreSQL, Java, Kafka,
GraphQL and RESTful APIs. This foundation allowed for efficient data storage, retrieval, and processing, enabling the system to
handle thousands of requests seamlessly.</li>
      <li>Collaborated closely with frontend engineers to create GraphQL, and RESTful APIs that enabled seamless communication
between the frontend and backend, resulting in a user-friendly interface and ensuring a seamless user experience.</li>
<li>Continuously36.3.optimized the backend architecture to improve system scalability and performance. This included fine-tuning
database queries, implementing caching mechanisms, and adopting microservices architecture to ensure the system could handle
growing data loads with ease.</li>        
</ul>`,
        icon: "tabler:briefcase",
    },
    {
        title:
            'Lead Developer <br /> <span class="font-normal">Williams-Sonoma Inc., San Francisco, CA</span> <br /> <span class="text-sm font-normal">2021 - 2023</span>',
        description: `<ul class="list-disc ">
      <li class="leading-relaxed">Led a team of 5 on-site and offshore developers in designing, developing, and maintaining software applications using Java,
Spring, JavaScript, Vue.js, React.js, LitElement, CSS, Tailwind, and other relevant technologies. Mentored and guided junior
developers and oversaw teams in an Agile environment.</li> 
<li>Successfully added new features to the Williams-Sonoma eCommerce platform and its sub-brands, including a unique Wedding
Registry design that increased customer engagement significantly, Buy Online and Pickup in Store functionality, and Smart Banner
integration that boosted mobile app downloads. Implemented micro-frontend architecture to deliver scalable and maintainable
software applications.</li> 
<li>Responsible for maintaining the Registry app, including managing the CI/CD pipeline using Jenkins, Docker, and Kubernetes.
Reduced Registry App bugs in development and production environments to a minimum, collaborated with cross-functional teams,
and ensured adherence to industry best practices for software development.</li> </ul>`,
        icon: "tabler:briefcase",
    },
    {
        title:
            'Lead Developer <br /> <span class="font-normal">MDout, Inc., San Francisco, CA</span> <br /> <span class="text-sm font-normal">2020 - 2021</span>',
        description: `<ul class="list-disc ">
          <li class="leading-relaxed">Led & contribute to a team of 10 developers in successfully launching a SaaS-based Optometry HER system for USA-based
    clinics, utilizing Node, TypeScript, Angular, MongoDB, and other technologies.</li> 
    <li>Trained and supervised the team in TypeScript, Angular, and Node, extensively improving their skills and contribution and
    increasing overall code quality.</li> 
    <li>Developed a user-friendly and innovative user interface for the EHR system with Angular, increasing customer engagement and
    satisfaction.</li> 
    <li>Created standards and processes to ensure high-quality work, including conducting code reviews, implementing automated testing,
    and creating documentation, resulting in a 95% bug-free release rate.</li>
    </ul>`,
        icon: "tabler:briefcase",
    },
    {
        title:
            'Senior Full Stack Software Engineer <br /> <span class="font-normal">International Organization for Migration (IOM), Kabul, Afghanistan</span> <br /> <span class="text-sm font-normal">2018 - 2021</span>',
        description: `<ul class="list-disc ">
          <li class="leading-relaxed">Collaborated with cross-functional teams to design and develop robust, efficient, and high-quality code that adhered to industry best
    practices and standards, resulting in successful project delivery and customer satisfaction.</li> 
    <li>practices and standards, resulting in successful project delivery and customer satisfaction.
    • Developed cutting-edge MIDAS and SHURA applications using .NET Core, C#, Vue, React, Java, Kotlin, Kafka, Flutter, and other
    state-of-the-art technologies, delivering compelling solutions that met business goals and exceeded user expectations.</li> 
    <li>Integrated Neurotechnology biometric devices seamlessly with the web application, enabling the capture of unique bio info and
    ensuring transparency of data by over 90%, thereby significantly reducing fraudulent activities and enhancing data security.</li>
    <li>Implemented innovative offline-first strategies, resulting in improved application performance, faster response times, and enhanced
    user satisfaction, even in areas with poor or no internet connectivity.</li>
    <li>Developed intuitive and user-friendly front-end applications using React JS and Vue JS, resulting in improved user satisfaction and
    engagement.</li>
    <li>Designed and developed mobile applications to support various projects, demonstrating my versatility and adaptability in meeting
    evolving client needs.</li>
    </ul>`,
        icon: "tabler:briefcase",
    },
    {
        title:
            'Software Engineer <br /> <span class="font-normal">Government, Kabul, Afghanistan</span> <br /> <span class="text-sm font-normal">2017 - 2018</span>',
        description: `<ul class="list-disc ">
          <li class="leading-relaxed">Revolutionized passport application processing for over 10,000 daily users by spearheading the design, development, and
    implementation of the Afghanistan Online Passport System. This game-changing solution reduced waiting times by 85%,
    streamlined the passport application process, and enhanced user experience.</li> 
    <li>Contributed to developing the Government Resource Planning (GRP) application, a transformative system used by over 20% of
    government offices, enabling government agencies to optimize their resources, improve workflows, and deliver better services to
    the public.</li>
    <li>Played a critical role in developing the groundbreaking Afghanistan Passport System, which processes and prints over 5,000 new
    passports on daily bases. Contributed to enhancing national security, promoting international travel, and strengthening the country's
    diplomatic relations as a critical member of a dynamic team of 5 Software Engineers.</li>
    <li>Meticulously documented and illustrated complex solutions using flow charts, diagrams, charts, and code comments to streamline
    processes, improve collaboration, and ensure the smooth functioning of various projects; demonstrated exceptional technical
    proficiency and attention to detail.</li>
    </ul>`,
        icon: "tabler:briefcase",
    },
    // {
    //     title:
    //         'Software Engineer <br /> <span class="font-normal">SPEENSOFT, Kabul, Afghanistan</span> <br /> <span class="text-sm font-normal">2016 - 2017</span>',
    //     description: `<ul class="list-disc ">
    //       <li class="leading-relaxed">Conceptualized, designed, developed, and deployed ZootZoot, a food and grocery delivery application consisting of web and
    // mobile applications for Android and iOS. The application generated significant revenue in its first year.,
    // providing an innovative solution that disrupted the traditional food and grocery delivery industry.</li> 
    // <li>Provided expert training to software developers on Vue.js, React, React Native, Laravel, Firebase, and other related
    // technologies. This training program increased their contribution by more than 50%, resulting in a significant expansion of their
    // skillset and an improvement in the overall quality of work.</li>
    // <li>Played a key role in the development of the Clean City application by studying system flow, data usage, and work processes,
    // investigating problem areas, and following the software development lifecycle. This extensive contribution ensured the delivery
    // of a high-quality application that met the needs of the users and exceeded their expectations.</li>
    // <li>Conducted rigorous code reviews to ensure adherence to standard practices, maintain code quality, and prevent the breaking of
    // functionality. This meticulous approach to the quality assurance provided a robust, reliable, and error-free application that
    // enhanced user satisfaction and improved the overall performance of the software system.</li>
    // <li>Participating in educational opportunities, reading professional publications, and actively engaging with personal networks to
    // remain up-to-date with emerging trends and best practices.</li>
    // </ul>`,
    //     icon: "tabler:briefcase",
    // },
];
