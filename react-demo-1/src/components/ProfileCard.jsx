import React from "react";

const styles = {
  profile: {
    backgroundColor: "lightgray",
    padding: 15,
    borderRadius: 8,
    color: "black",
  },
};
const ProfileCard = () => {
  return (
    <div>
      <div style={styles.profile}>
        <h1>Profile Card</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          voluptatem maiores nam atque laudantium at dolorem consequuntur, ipsam
          earum, eum nobis distinctio nulla beatae, necessitatibus consequatur
          nihil reiciendis accusamus hic.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
