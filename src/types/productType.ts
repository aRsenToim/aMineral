


export interface IProductCard {
 title: string
 id: number
 img: string
 group: {
  id: string
  title: string
 }
}

export interface IProduct {
 id: number
	title: string
 img: string
	group: {
		id: string
		title: string
	},
	properties: {
	}
}