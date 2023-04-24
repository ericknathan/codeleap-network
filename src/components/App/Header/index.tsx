import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

import { Heading } from "@/components/Text";

import { IconButton } from "@/components/Form";
import { signOut } from "@/redux/slices/authSlice";
import { StyledHeader } from "./styles";

export function Header() {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <Heading as="h1">CodeLeap Network</Heading>
      <IconButton
        title={`Logout from ${auth.username} account`}
        onClick={() => dispatch(signOut())}
      >
        <img src="/icons/logout.svg" />
      </IconButton>
    </StyledHeader>
  );
}
