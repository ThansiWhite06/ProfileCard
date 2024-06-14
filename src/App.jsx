import './App.css'
import PropTypes from "prop-types";
const UserData=[
  {
    name:"Thansi",
    city:"Tirunelveli",
    description:"Senior Software Developer",
    skills:["C","c++","Java","Python","MySQL"],
    online:false,
    profile:"https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
  },
  {
    name:"Merce",
    city:"Nagercoil",
    description:"Full Stack Developer",
    skills:["Web Development","HTML","CSS","JavaScript","React"],
    online:true,
    profile:"https://as1.ftcdn.net/v2/jpg/00/89/61/72/1000_F_89617216_hXm7SwZCOP1KaWVBKl7OnTnxBQOzst8Q.jpg",
  },
  {
    name:"Anton",
    city:"Thoothukudi",
    description:"Front End Developer",
    skills:["Front End Development","HTML","CSS","JavaScript","React","Ui/Ux"],
    online:false,
    profile:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
];
function User(props){
  return <div className="card-container">
    <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
    <img className="img" src={props.profile} alt="profile" height={150} width={120}/>
    <h3>{props.name}</h3>
    <h3>{props.city}</h3>
    <p>{props.description}</p>
    <div className="buttons">
      <button className="primary">Message</button>
      <button className="primary outline">Following</button>
    </div>
    <div className="skills">
      <h6>Skills</h6>
      <ul>
        {props.skills.map((skill,index)=>(
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  </div>
}
function App() {
  return (
    <>
    {/* <User name="Teresa" city="New York" description="Front End Developer" skills={["Front End Development","HTML","CSS","JavaScript","React","Ui/Ux"]} online={true} profile="https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png?f=webp"/>
    <User name="Teresa" city="New York" description="Front End Developer" skills={["Front End Development","HTML","CSS","JavaScript","React","Ui/Ux"]} online={true} profile="https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png?f=webp"/>
    <User name="Teresa" city="New York" description="Front End Developer" skills={["Front End Development","HTML","CSS","JavaScript","React","Ui/Ux"]} online={true} profile="https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png?f=webp"/>
       */}

    {
      UserData.map((user,index)=>(
        <User key={index} name={user.name} city={user.city} description={user.description} skills={user.skills} online={user.online} profile={user.profile} />
      ))
    }
    </>
  )
}
User.propTypes={
  name:PropTypes.string,
  city:PropTypes.string,
  description:PropTypes.string,
  online:PropTypes.bool,
  profile:PropTypes.string,
  skills:PropTypes.array,
};
export default App
