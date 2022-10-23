const Profile = ({ avatar, username, bio }) => {
  return (
    <div className="container col-12 col-md-3 d-flex flex-column gap-3 justify-content-center align-items-center text-center ">
      <img src={avatar} className="col-4 mx-auto" alt="avatar" />
      <h5 className="text-bold text-white">{username}</h5>
      <p className="text-white">{bio}</p>
    </div>
  );
};

export default Profile;
