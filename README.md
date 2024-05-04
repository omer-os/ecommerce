# Next.js ecommerce website

this is simple overview on how i structured this ecopmmerce app that i used this tech stack for it:

1- nextjs as full stack framework with typescript
2- i used next-auth for authetication and authorization with prisma adapter and (discord, github and google) providers
3- prisma as orm 
4- shadcn and radix-ui for ui 
5- t3-oss for env typesafety support
6- uploadthing for file storage service
7- jotai for state management
8- lucide-react for icons, framer-motion for animations and tailwindcss for styling
9- zod for schema validation on client and server side
10- nextjs server components and server actions

check other packages i used in [package.json](https://github.com/omer-os/ecommerce/blob/main/package.json)

the main code exists in /src/ folder which includes:

* src/app -> nextjs file based routing pages
* src/components -> includes custom and ui components for the app
* src/lib -> some global utils and atoms
* [src/server](https://github.com/omer-os/ecommerce/tree/main/src/server) -> contains authentication, and server actions both for queries and mutations

the most improtant thing on react applications is how you split the tens of compoents you have. based on my past expearinces on reactjs after some time modifying and changing components becomes so complex and messy. so i really care about how i structure and name my components, this helps with the quality of the codebase, and scalibilaty whichs the most improtant thing in any project. 

for this website we have two main modules whichs:
* dashboard
* store front

ive decided to start all the components for the dashboard with ds and the store with st, this makes seperation between them pretty easy:
ds-{component name}-{type of the component}
st-{component name}-{type of the component}

here are some examples:
* [ds-categories-grid](https://github.com/omer-os/ecommerce/blob/main/src/components/custom/grids/ds-categories-grid.tsx) grid component just for dashboard
* [st-categories-grid](https://github.com/omer-os/ecommerce/blob/main/src/components/custom/grids/st-categories-grid.tsx) same component but for store, the website visitors/clients will see this component


