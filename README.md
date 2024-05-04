
# Next.js ecommerce website

this is simple overview on how i structured this ecopmmerce app that i used this tech stack for it:

1. nextjs as full stack framework with typescript.
2. i used next-auth for authetication and authorization with prisma adapter and (discord, github and google) providers
3. prisma as orm 
4. shadcn and radix-ui for ui 
5. t3-oss for env typesafety support
6. uploadthing for file storage service
7. jotai for state management
8. lucide-react for icons, framer-motion for animations and tailwindcss for styling
9. zod for schema validation on client and server side
10. nextjs server components and server actions

check other packages i used in [package.json](https://github.com/omer-os/ecommerce/blob/main/package.json)

the main code exists in /src/ folder which includes:

* src/app -> nextjs file based routing pages
* src/components -> includes custom and ui components for the app
* src/lib -> some global utils and atoms
* [src/server](https://github.com/omer-os/ecommerce/tree/main/src/server) -> contains authentication, and server actions both for queries and mutations

> the most improtant thing on react applications is how you split the
> tens of compoents you have. based on my past expearinces on reactjs
> after some time modifying and changing components becomes so complex
> and messy. so i really care about how i structure and name my
> components, this helps with the quality of the codebase, and
> scalibilaty whichs the most improtant thing in any project.

for this website we have **two main modules** which are:
* dashboard -> what admins and store owners use
* store front -> what users/client see

ive decided to start all the components for the dashboard with ds and the store with st, this makes seperation between them pretty easy:

 - ds-{component name}-{type of the component} st-{component name}-{type
   of the component}

**here are some examples**:
* [ds-categories-grid](https://github.com/omer-os/ecommerce/blob/main/src/components/custom/grids/ds-categories-grid.tsx) grid component just for dashboard
* [st-categories-grid](https://github.com/omer-os/ecommerce/blob/main/src/components/custom/grids/st-categories-grid.tsx) same component but for store, the website visitors/clients will see this component


i decided to explore new nextjs **server actions** in this project, how to use them and how it seperates between client side and server side functions. server actions are basically " **asynchronous functions that are executed on the server**. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications" based on the [nextjs docs](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#:~:text=Server%20Actions%20are%20asynchronous%20functions,mutations%20in%20Next.js%20applications.)

i was # amazed with how it improves the code quality and makes so easy to use the same function in server and client component. also i put the queries on same file as server actions, this made using these funcitons whenever i want very easy. heres what [src/server/actions](https://github.com/omer-os/ecommerce/tree/main/src/server/actions) folder contains: 
* [category.ts](https://github.com/omer-os/ecommerce/blob/main/src/server/actions/category.ts)
* [featured-category.ts](https://github.com/omer-os/ecommerce/blob/main/src/server/actions/featured-categories.ts)
* [order.ts](https://github.com/omer-os/ecommerce/blob/main/src/server/actions/order.ts)
* [product.ts](https://github.com/omer-os/ecommerce/blob/main/src/server/actions/product.ts)
* [store.ts](https://github.com/omer-os/ecommerce/blob/main/src/server/actions/store.ts)
* [user.ts](https://github.com/omer-os/ecommerce/blob/main/src/server/actions/user.ts)

how **product.ts** looks like :

 ```
// queries
export const getProducts = async ({ categoryId }: { categoryId: string }) => ...
export const getProduct 
export const GetTotalProductsViews


// mutations
createProduct 
updateProduct

export const deleteProduct = async ({ id }: { id: string }) => {
const session = await
getServerAuthSession();



if (!session || session.user.role !== “ADMIN”) {  
throw new Error(“Unauthorized”);  
}  
// check how server actions interact with server directly, this is bc server actions works on server side. its like php code inside html but its actually working on server.  
const res = await db.product.delete({  
where: {  
id,  
},  
});

if (res) {  
console.log(res.categoryId);

revalidatePath(`/dashboard/products/${res.categoryId}`);


}

return res;  
};
```



> prisma schema exists inside ./prisma/schema.ts theres also
> ./prisma/zod whichs folder that contains all the zod schema validation
> code generated from prisma schema using library called
> [zod-prisma](https://github.com/CarterGrimmeisen/zod-prisma)
