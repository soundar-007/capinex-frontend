// utils.js or services.js

// Generate a random arithmetic problem
export const generateProblem = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operations = ["+", "-", "*"];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  let correctAnswer;
  const question = `${num1} ${operation} ${num2}`;

  switch (operation) {
    case "+":
      correctAnswer = num1 + num2;
      break;
    case "-":
      correctAnswer = num1 - num2;
      break;
    case "*":
      correctAnswer = num1 * num2;
      break;
    default:
      correctAnswer = num1 + num2;
  }

  return { question, correctAnswer };
};

// Services Data
export const ServicesData = [
  {
    title: "AI & LLM Solutions",
    subText:
      "AI and machine learning services including natural language processing, large language models (LLM), and automation.",
    link: "/services/ai-llm-solutions",
    image: "/images/services/aiml.webm",
  },
  {
    title: "Software Development",
    subText:
      "Scalable software solutions through full-cycle development, ensuring seamless integration and optimal performance for business success",
    link: "/services/software-development",
    image: "/images/services/software.webm",
  },
  {
    title: "Mobile App Development",
    subText:
      "We create innovative native and cross-platform apps for iOS and Android, combining seamless performance with intuitive designs to drive your business success.",
    link: "/services/mobileapp-development",
    image: "/images/services/mobile.webm",
  },
  {
    title: "Web Application Development",
    subText:
      "Our Agile specialists craft custom web applications tailored to your business requirements, ensuring seamless functionality and scalability for new projects.",
    link: "/services/webapp-development",
    image: "/images/services/web.webm",
  },
  {
    title: "Cloud Services and Integration",
    subText:
      "We collaborate closely to understand your unique business challenges and develop tailored cloud technology strategies. Our goal is to exceed expectations with innovative cloud solutions that deliver exceptional results and drive business growth.",
    link: "/services/cloud-service-integration",
    image: "/images/services/cloud.webm",
  },
];

// Constants
export const adminBaseurl = `/admin`;

// Notifications
export const successNotification = (api, message, subtext) => {
  api.success({
    message: message,
    description: subtext,
    placement: "topRight",
  });
};

export const ErrorNotification = (api, message, subtext) => {
  api.error({
    message: message,
    description: subtext,
    placement: "topRight",
  });
};

// Initial Values and Types (for forms or content submission)
export const InitialContentValue = {
  title: "",
  description: "",
  bannerImageUrl: "",
  content: "",
  permalink: "",
  readTime: "",
  actionType: "Draft",
};
