import {defineField, defineType} from 'sanity'

const project = defineType({
  name: 'project',
  title: 'Проєкти',
  type: 'document',
  fields: [
    defineField({name:'title', title:'Назва', type:'string'}),
    defineField({name:'slug', title:'Slug', type:'slug', options:{source:'title'}}),
    defineField({name:'city', title:'Місто', type:'string'}),
    defineField({name:'objectType', title:'Тип обʼєкта', type:'string'}),
    defineField({name:'cover', title:'Обкладинка', type:'image', options:{hotspot:true}}),
    defineField({name:'gallery', title:'Галерея', type:'array', of:[{type:'image', options:{hotspot:true}}]}),
    defineField({name:'summary', title:'Короткий опис', type:'text', rows:4}),
    defineField({name:'solution', title:'Рішення', type:'array', of:[{type:'block'}]}),
    defineField({name:'brands', title:'Бренди', type:'array', of:[{type:'reference', to:[{type:'brand'}]}]}),
    defineField({name:'products', title:'Продукти', type:'array', of:[{type:'reference', to:[{type:'product'}]}]}),
    defineField({name:'featured', title:'Показувати на головній', type:'boolean', initialValue:false}),
  ]
})

const brand = defineType({
  name: 'brand', title: 'Бренди', type: 'document',
  fields:[
    defineField({name:'title', title:'Назва', type:'string'}),
    defineField({name:'slug', title:'Slug', type:'slug', options:{source:'title'}}),
    defineField({name:'country', title:'Країна', type:'string'}),
    defineField({name:'logo', title:'Логотип', type:'image'}),
    defineField({name:'description', title:'Опис', type:'text'}),
    defineField({name:'website', title:'Сайт виробника', type:'url'}),
  ]
})

const product = defineType({
  name:'product', title:'Продукти', type:'document',
  fields:[
    defineField({name:'title', title:'Назва', type:'string'}),
    defineField({name:'slug', title:'Slug', type:'slug', options:{source:'title'}}),
    defineField({name:'brand', title:'Бренд', type:'reference', to:[{type:'brand'}]}),
    defineField({name:'category', title:'Категорія', type:'string', options:{list:[
      {title:'Внутрішньопідлогові конвектори', value:'floor-convectors'},
      {title:'Дизайнерські радіатори', value:'radiators'},
      {title:'Рушникосушки', value:'towel-warmers'},
      {title:'Engineering', value:'engineering'}
    ]}}),
    defineField({name:'cover', title:'Фото', type:'image', options:{hotspot:true}}),
    defineField({name:'description', title:'Опис', type:'array', of:[{type:'block'}]}),
    defineField({name:'downloads', title:'Файли / каталоги', type:'array', of:[{type:'file'}]}),
  ]
})

const page = defineType({
  name:'page', title:'Сторінки', type:'document',
  fields:[
    defineField({name:'title', title:'Назва', type:'string'}),
    defineField({name:'slug', title:'Slug', type:'slug', options:{source:'title'}}),
    defineField({name:'headline', title:'Заголовок', type:'string'}),
    defineField({name:'body', title:'Контент', type:'array', of:[{type:'block'},{type:'image', options:{hotspot:true}}]}),
    defineField({name:'seoTitle', title:'SEO title', type:'string'}),
    defineField({name:'seoDescription', title:'SEO description', type:'text', rows:3}),
  ]
})

export const schemaTypes = [project, brand, product, page]
