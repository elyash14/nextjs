import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import H1 from "components/atoms/H1";
import H3 from "components/atoms/H3";
import Toggle from "components/atoms/Toggle";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppDispatch } from "store";
import { toggleTheme } from "store/slices/themeSlice";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.625rem;
`;

const Header: React.FC = () => {
  const router = useRouter();
  const { isDark } = useTheme();
  const dispatch = useAppDispatch();

  return (
    <StyledHeader>
      <Link href="/">
        <a>
          {router.pathname === "/" ? <H1>Site Title</H1> : <H3>Site Title</H3>}
        </a>
      </Link>
      <Toggle
        checked={isDark as boolean}
        imageChecked="/moon.png"
        imageUnchecked="/sun.png"
        handleCheck={() => dispatch(toggleTheme())}
      />
    </StyledHeader>
  );
};
export default Header;
