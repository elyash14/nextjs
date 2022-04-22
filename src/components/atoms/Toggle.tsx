import styled from "@emotion/styled";
import Image from "next/image";

interface IToggleProps {
  checked: boolean;
  imageChecked?: string;
  imageUnchecked?: string;
  handleCheck(): void;
}

const Toggle: React.FC<IToggleProps> = (props) => {
  const { checked, imageChecked, imageUnchecked, handleCheck } = props;

  return (
    <ToggleFrame onClick={handleCheck}>
      <ToggleHandle checked={checked} />
      {imageChecked && (
        <ToggleImage style={{ left: 5 }}>
          <Image
            style={{ float: "left" }}
            src={imageChecked}
            width={16}
            height={16}
          />
        </ToggleImage>
      )}
      {imageUnchecked && (
        <ToggleImage style={{ right: 5 }}>
          <Image
            style={{ float: "right" }}
            src={imageUnchecked}
            width={16}
            height={16}
          />
        </ToggleImage>
      )}
    </ToggleFrame>
  );
};

export default Toggle;

const ToggleFrame = styled.div`
  cursor: pointer;
  touch-action: pan-x;
  display: inline-block;
  position: relative;
  background: black;
  width: 50px;
  height: 24px;
  padding: 0;
  border-radius: 30px;
  background-color: #0f1114;
  transition: all 0.2s ease;
`;

const ToggleHandle = styled.div<{ checked: boolean }>`
  position: absolute;
  top: 1px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #fafafa;
  box-sizing: border-box;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  transform: translateX(${(props) => (props.checked ? "27px" : "1px")});
  z-index: 1;
`;

const ToggleImage = styled.div`
  position: absolute;
  width: 17px;
  height: 17px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
`;
