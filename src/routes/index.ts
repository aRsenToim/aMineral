import React from "react"
import Home from "../pages/Home"
import Catalog from "../pages/Catalog"
import Search from "../pages/search"
import ASearch from "../pages/asearch"
import Info from "../pages/info"
import Mineral from "../pages/Mineral"
import Create from "../pages/create"



export interface IRoute {
 path: string
 element: React.ElementType
}


enum RoutesNames {
 Home = '/',
 Catalog = '/catalog',
 Search = '/search',
 ASearch = '/asearch',
 Info = '/info',
 Mineral = '/mineral/:id',
 Create = '/create'
}


export const routes: IRoute[] = [
 {
  path: RoutesNames.Home,
  element: Home
 },
 {
  path: RoutesNames.Catalog,
  element: Catalog
 },
 {
  path: RoutesNames.Search,
  element: Search
 },
 {
  path: RoutesNames.ASearch,
  element: ASearch
 },
 {
  path: RoutesNames.Info,
  element: Info
 },
 {
  path: RoutesNames.Mineral,
  element: Mineral
 },
 {
  path: RoutesNames.Create,
  element: Create
 },
]