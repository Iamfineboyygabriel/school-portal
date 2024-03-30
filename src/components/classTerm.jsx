import { useParams } from "react-router-dom";
import FirstTermJSS1 from "../pages/dashboardPage/sections/portal/jss1/firstTerm";
import SecondTermJSS1 from "../pages/dashboardPage/sections/portal/jss1/secondTerm";
import ThirdTermJSS1 from "../pages/dashboardPage/sections/portal/jss1/thirdTerm";

import FirstTermJSS2 from "../pages/dashboardPage/sections/portal/jss2/firstTerm";
import SecondTermJSS2 from "../pages/dashboardPage/sections/portal/jss2/secondTerm";
import ThirdTermJSS2 from "../pages/dashboardPage/sections/portal/jss2/thirdTerm";

import FirstTermJSS3 from "../pages/dashboardPage/sections/portal/jss3/firstTerm";
import SecondTermJSS3 from "../pages/dashboardPage/sections/portal/jss3/secondTerm";
import ThirdTermJSS3 from "../pages/dashboardPage/sections/portal/jss3/thirdTerm";

const ClassTerm = () => {
  const { class: className, term } = useParams();

  let TermComponent;
  switch (term) {
    case "first-term-jss1":
      TermComponent = FirstTermJSS1;
      break;
    case "second-term-jss1":
      TermComponent = SecondTermJSS1;
      break;
    case "third-term-jss1":
      TermComponent = ThirdTermJSS1;
      break;
    case "first-term-jss2":
      TermComponent = FirstTermJSS2;
      break;
    case "second-term-jss2":
      TermComponent = SecondTermJSS2;
      break;
    case "third-term-jss2":
      TermComponent = ThirdTermJSS2;
      break;
    case "first-term-jss3":
      TermComponent = FirstTermJSS3;
      break;
    case "second-term-jss3":
      TermComponent = SecondTermJSS3;
      break;
    case "third-term-jss3":
      TermComponent = ThirdTermJSS3;
      break;
    default:
      return <div>Invalid term</div>;
  }

  return <TermComponent className={className} />;
};

export default ClassTerm;
