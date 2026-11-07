import { LinkOutlined, MessageFilled } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Divider, message } from "antd";
import CopyToClipboard from "react-copy-to-clipboard";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const WhatsAppShareButton = styled(Button, {
  background: "#25D366",
  borderColor: "#25D366",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#62df91 !important",
    borderColor: "#62df91 !important",
    color: "#ffffff !important",
  },
  "&:focus": {
    backgroundColor: "#62df91 !important",
    borderColor: "#62df91 !important",
    color: "#ffffff !important",
  },
});

const LinkShareButton = styled(Button, {
  background: "#53acee",
  borderColor: "#53acee",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#9fcbed !important",
    borderColor: "#9fcbed !important",
    color: "#ffffff !important",
  },
  "&:focus": {
    backgroundColor: "#9fcbed !important",
    borderColor: "#9fcbed !important",
    color: "#ffffff !important",
  },
});

type ShareProps = {
  data?: Data;
};

export default function Share({ data }: ShareProps) {


  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Bagikan Undangan</Title>
      </Divider>
      <WhatsAppShareButton
        style={{ margin: 8 }}
        icon={<MessageFilled />}
        size="large"
        onClick={() => {
          const url = typeof window !== "undefined" ? window.location.href : "";
          const text = `Undangan pernikahan ${data?.groom?.name} & ${data?.bride?.name}: ${url}`;
          window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
        }}
      >
        Bagikan melalui WhatsApp
      </WhatsAppShareButton>
      <CopyToClipboard text={typeof window !== "undefined" ? window.location.href : ""}>
        <LinkShareButton
          style={{ margin: 8 }}
          icon={<LinkOutlined />}
          size="large"
          onClick={() => message.success("Tautan undangan berhasil disalin.")}
        >
          Salin Tautan Undangan
        </LinkShareButton>
      </CopyToClipboard>
    </Wrapper>
  );
}
