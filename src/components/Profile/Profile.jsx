const profiles = [
  {
    avatar: "https://eldesernauta.com/thumbnail.png",
    username: "@eldesernauta",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Profile = ({ avatar, username, bio }) => {
  return (
    <div className="container col-12 col-md-3 d-flex flex-column gap-3 justify-content-center align-items-center text-center ">
      {profiles.map((profile, i) => (
        <div key={i}>
          <img src={profile.avatar} className="col-4 mx-auto" alt="avatar" />
          <h5 className="text-bold">{profile.username}</h5>
          <p>{profile.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default Profile;
