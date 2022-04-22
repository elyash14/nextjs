import styled from "@emotion/styled";
import A from "components/atoms/A";

const StyledFooter = styled.footer`
  margin-top: 4.375rem;
  padding-top: 1.75rem;
  margin-top: auto;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <A
        href="https://mobile.twitter.com/dan_abramov"
        target="_blank"
        rel="noopener noreferrer"
      >
        twitter
      </A>
      &nbsp;•&nbsp;
      <A
        href="https://github.com/gaearon"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </A>
      &nbsp;•&nbsp;
      <A
        href="https://stackoverflow.com/users/458193/dan-abramov"
        target="_blank"
        rel="noopener noreferrer"
      >
        stack overflow
      </A>
      <div style={{ float: "right" }}>
        <A href="/rss.xml" target="_blank" rel="noopener noreferrer">
          rss
        </A>
      </div>
    </StyledFooter>
  );
};
export default Footer;
