import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import Link from "next/link";

const MessageBar = () => (
  <Sidebar.Pushable
    as={Segment}
    style={{
      height: "100vh",
      width: "100%",
      overflow: "hidden",
      padding: "10px",
      marginLeft: "auto",
      marginRight: "auto"
    }}
  >
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted={true}
      vertical={true}
      visible={true}
      width="thin"
    >
      <Link href="/">
        <Menu.Item as="a">
          <Icon name="home" />
          <span> Home </span>
        </Menu.Item>
      </Link>
      <Link href="/user">
        <Menu.Item as="a">
          <Icon name="user" />
          <span> User </span>
        </Menu.Item>
      </Link>
      <Menu.Item as="a">
        <Icon name="camera" />
        Channels
      </Menu.Item>
    </Sidebar>
  </Sidebar.Pushable>
);

export default MessageBar;
