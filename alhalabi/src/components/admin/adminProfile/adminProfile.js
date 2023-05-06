import * as React from "react";
import PropTypes from "prop-types";
import Menu, { menuClasses } from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Sheet from "@mui/joy/Sheet";
import Person from "@mui/icons-material/Person";


const modifiers = [
  {
    name: "offset",
    options: {
      offset: ({ placement }) => {
        if (placement.includes("end")) {
          return [8, 20];
        }
        return [-8, 20];
      },
    },
  },
];

function MenuButton({
  children,
  menu,
  open,
  onOpen,
  onLeaveMenu,
  label,
  ...props
}) {
  const buttonRef = React.useRef(null);
  const isOnButton = React.useRef(false);
  const menuActions = React.useRef(null);
  const internalOpen = React.useRef(open);
 
  const handleButtonKeyDown = (event) => {
    internalOpen.current = open;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      onOpen(event);
      if (event.key === "ArrowUp") {
        menuActions.current?.highlightLastItem();
      }
    }
  };

  return (
    <React.Fragment>
      <IconButton
        {...props}
        ref={buttonRef}
        variant="plain"
        color="neutral"
        aria-haspopup="menu"
        aria-expanded={open ? "true" : undefined}
        aria-controls={open ? `nav-example-menu-${label}` : undefined}
        onMouseDown={() => {
          internalOpen.current = open;
        }}
        onClick={() => {
          if (!internalOpen.current) {
            onOpen();
          }
        }}
        onMouseEnter={() => {
          onOpen();
          isOnButton.current = true;
        }}
        onMouseLeave={() => {
          isOnButton.current = false;
        }}
        onKeyDown={handleButtonKeyDown}
      >
        {children}
      </IconButton>
      {React.cloneElement(menu, {
        open,
        onClose: () => {
          menu.props.onClose?.();
          buttonRef.current?.focus();
        },
        onMouseLeave: () => {
          onLeaveMenu(() => isOnButton.current);
        },
        actions: menuActions,
        anchorEl: buttonRef.current,
        modifiers,
        slotProps: {
          listbox: {
            id: `nav-example-menu-${label}`,
            "aria-label": label,
          },
        },
        placement: "right-start",
        sx: {
          width: 180,
          [`& .${menuClasses.listbox}`]: {
            "--List-padding": "var(--ListDivider-gap)",
          },
        },
      })}
    </React.Fragment>
  );
}

MenuButton.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  menu: PropTypes.element.isRequired,
  onLeaveMenu: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function AdminProfile() {
  const [menuIndex, setMenuIndex] = React.useState(null);
  const itemProps = {
    onClick: () => setMenuIndex(null),
  };
  const createHandleLeaveMenu = (index) => (getIsOnButton) => {
    setTimeout(() => {
      const isOnButton = getIsOnButton();
      if (!isOnButton) {
        setMenuIndex((latestIndex) => {
          if (index === latestIndex) {
            return null;
          }
          return latestIndex;
        });
      }
    }, 200);
  };
  return (
    <Sheet sx={{ borderRadius: "50px", bgcolor: "#0097B2",boxShadow:"0px 1px 7px rgba(0, 0, 0, 0.5)" }}>
      <List>
        <ListItem>
          <MenuButton
            label="Personal"
            sx={{
              color: "white",
            }}
            open={menuIndex === 2}
            onOpen={() => setMenuIndex(2)}
            onLeaveMenu={createHandleLeaveMenu(2)}
            menu={
              <Menu onClose={() => setMenuIndex(null)}>
                <MenuItem {...itemProps}>Your Profile</MenuItem>
                <MenuItem {...itemProps}>Home Page</MenuItem>
                <MenuItem {...itemProps}>Sign Out</MenuItem>
              </Menu>
            }
          >
            <Person />
          </MenuButton>
        </ListItem>
      </List>
    </Sheet>
  );
}
