import styled from "@emotion/styled";
import CircleImage from "components/atoms/CircleImage";
import ProfileTitle from "components/molecules/ProfileTitle";
import A from "components/atoms/A";
import Image from "next/image";

//
const StyledFooter = styled.div`
  display: flex;
  margin-bottom: 3.5rem;
`;

const Profile: React.FC = () => {
  return (
    <StyledFooter>
      <CircleImage>
        <Image src="/profile.jpeg" width={56} height={56} />
      </CircleImage>
      <ProfileTitle>
        <span>Personal blog by</span>&nbsp;
        <A href="https://mobile.twitter.com/username">User Name</A>
        <br />
        <span>I explain with words and code.</span>
      </ProfileTitle>
    </StyledFooter>
  );
};

export default Profile;
