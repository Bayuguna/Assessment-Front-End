import { type } from "os";
import { Routing } from "../router/router_constant";

interface MenuNavProps {
  href: string;
  name: string;
  label?: string;
}

export const menuNav: MenuNavProps[] = [
  {href: Routing.HOME, name: 'Home'},
  {href: Routing.PRODUCT, name: 'Shop', label:'CRUD + Web Socket'},
  // {href: Routing.TRANSACTION, name: 'Transaction'},
  {href: Routing.CHAT, name: 'Group Chat', label: 'Web Socket'},
  {href: Routing.NOTE, name: 'Group Note', label: 'Web Socket'},
];