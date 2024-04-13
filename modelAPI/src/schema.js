// const {
//     intArg,
//     makeSchema,
//     nonNull,
//     objectType,
//     stringArg,
//     inputObjectType,
//     arg,
//     asNexusMethod,
//     enumType,
//   } = require('nexus')
//   const { DateTimeResolver } = require('graphql-scalars')
  
//   const DateTime = asNexusMethod(DateTimeResolver, 'date')
  
//   const Query = objectType({
//     name: 'Query',
//     definition(t) {
  //     // t.nonNull.list.nonNull.field('allUsers', {
  //     //   type: 'User',
  //     //   resolve: (_parent, _args, context) => {
  //     //     return context.prisma.user.findMany()
  //     //   },
  //     // })
  
  //     // t.nullable.field('postById', {
  //     //   type: 'Post',
  //     //   args: {
  //     //     id: stringArg(),
  //     //   },
  //     //   resolve: (_parent, args, context) => {
  //     //     return context.prisma.post.findUnique({
  //     //       where: { id: args.id || undefined },
  //     //     })
  //     //   },
  //     // })
  
  //     // t.nonNull.list.nonNull.field('feed', {
  //     //   type: 'Post',
  //     //   args: {
  //     //     searchString: stringArg(),
  //     //     skip: intArg(),
  //     //     take: intArg(),
  //     //     orderBy: arg({
  //     //       type: 'PostOrderByUpdatedAtInput',
  //     //     }),
  //     //   },
  //     //   resolve: (_parent, args, context) => {
  //     //     const or = args.searchString
  //     //       ? {
  //     //           OR: [
  //     //             { title: { contains: args.searchString } },
  //     //             { content: { contains: args.searchString } },
  //     //           ],
  //     //         }
  //     //       : {}
  
  //     //     return context.prisma.post.findMany({
  //     //       where: {
  //     //         published: true,
  //     //         ...or,
  //     //       },
  //     //       take: args.take || undefined,
  //     //       skip: args.skip || undefined,
  //     //       orderBy: args.orderBy || undefined,
  //     //     })
  //     //   },
  //     // })
  
  //     // t.list.field('draftsByUser', {
  //     //   type: 'Post',
  //     //   args: {
  //     //     userUniqueInput: nonNull(
  //     //       arg({
  //     //         type: 'UserUniqueInput',
  //     //       }),
  //     //     ),
  //     //   },
  //     //   resolve: (_parent, args, context) => {
  //     //     return context.prisma.user
  //     //       .findUnique({
  //     //         where: {
  //     //           id: args.userUniqueInput.id || undefined,
  //     //           email: args.userUniqueInput.email || undefined,
  //     //         },
  //     //       })
  //     //       .posts({
  //     //         where: {
  //     //           published: false,
  //     //         },
  //     //       })
  //     //   },
  //     // })
  //   },
  // })
  
  // const Mutation = objectType({
  //   name: 'Mutation',
  //   definition(t) {
  //     // t.nonNull.field('signupUser', {
  //     //   type: 'User',
  //     //   args: {
  //     //     data: nonNull(
  //     //       arg({
  //     //         type: 'UserCreateInput',
  //     //       }),
  //     //     ),
  //     //   },
  //     //   resolve: (_, args, context) => {
  //     //     const postData = args.data.posts
  //     //       ? args.data.posts.map((post) => {
  //     //           return { title: post.title, content: post.content || undefined }
  //     //         })
  //     //       : []
  //     //     return context.prisma.user.create({
  //     //       data: {
  //     //         name: args.data.name,
  //     //         email: args.data.email,
  //     //         posts: {
  //     //           create: postData,
  //     //         },
  //     //       },
  //     //     })
  //     //   },
  //     // })
  
  //     // t.field('createDraft', {
  //     //   type: 'Post',
  //     //   args: {
  //     //     data: nonNull(
  //     //       arg({
  //     //         type: 'PostCreateInput',
  //     //       }),
  //     //     ),
  //     //     authorEmail: nonNull(stringArg()),
  //     //   },
  //     //   resolve: (_, args, context) => {
  //     //     return context.prisma.post.create({
  //     //       data: {
  //     //         title: args.data.title,
  //     //         content: args.data.content,
  //     //         author: {
  //     //           connect: { email: args.authorEmail },
  //     //         },
  //     //       },
  //     //     })
  //     //   },
  //     // })
  
  //     // t.field('togglePublishPost', {
  //     //   type: 'Post',
  //     //   args: {
  //     //     id: nonNull(stringArg()),
  //     //   },
  //     //   resolve: async (_, args, context) => {
  //     //     const post = await context.prisma.post.findUnique({
  //     //       where: { id: args.id || undefined },
  //     //       select: {
  //     //         published: true,
  //     //       },
  //     //     })
  
  //     //     if (!post) {
  //     //       throw new Error(
  //     //         `Post with ID ${args.id} does not exist in the database.`,
  //     //       )
  //     //     }
  
  //     //     return context.prisma.post.update({
  //     //       where: { id: args.id || undefined },
  //     //       data: { published: !post.published },
  //     //     })
  //     //   },
  //     // })
  
  //     // t.field('incrementPostViewCount', {
  //     //   type: 'Post',
  //     //   args: {
  //     //     id: nonNull(stringArg()),
  //     //   },
  //     //   resolve: (_, args, context) => {
  //     //     return context.prisma.post.update({
  //     //       where: { id: args.id || undefined },
  //     //       data: {
  //     //         viewCount: {
  //     //           increment: 1,
  //     //         },
  //     //       },
  //     //     })
  //     //   },
  //     // })
  
  //     // t.field('deletePost', {
  //     //   type: 'Post',
  //     //   args: {
  //     //     id: nonNull(stringArg()),
  //     //   },
  //     //   resolve: (_, args, context) => {
  //     //     return context.prisma.post.delete({
  //     //       where: { id: args.id },
  //     //     })
  //     //   },
  //     // })
  //   },
  // })
  
  // const User = objectType({
  //   name: 'User',
  //   definition(t) {
  //     t.nonNull.string('id')
  //     t.string('name')
  //     t.nonNull.string('email')
  //     t.nonNull.list.nonNull.field('posts', {
  //       type: 'Post',
  //       resolve: (parent, _, context) => {
  //         return context.prisma.user
  //           .findUnique({
  //             where: { id: parent.id || undefined },
  //           })
  //           .posts()
  //       },
  //     })
  //   },
  // })
  
  // const Post = objectType({
  //   name: 'Post',
  //   definition(t) {
  //     t.nonNull.string('id')
  //     t.nonNull.field('createdAt', { type: 'DateTime' })
  //     t.nonNull.field('updatedAt', { type: 'DateTime' })
  //     t.nonNull.string('title')
  //     t.string('content')
  //     t.nonNull.boolean('published')
  //     t.nonNull.int('viewCount')
  //     t.field('author', {
  //       type: 'User',
  //       resolve: (parent, _, context) => {
  //         return context.prisma.post
  //           .findUnique({
  //             where: { id: parent.id || undefined },
  //           })
  //           .author()
  //       },
  //     })
  //   },
  // })
  
  // const SortOrder = enumType({
  //   name: 'SortOrder',
  //   members: ['asc', 'desc'],
  // })
  
  // const PostOrderByUpdatedAtInput = inputObjectType({
  //   name: 'PostOrderByUpdatedAtInput',
  //   definition(t) {
  //     t.nonNull.field('updatedAt', { type: 'SortOrder' })
  //   },
  // })
  
  // const UserUniqueInput = inputObjectType({
  //   name: 'UserUniqueInput',
  //   definition(t) {
  //     t.string('id')
  //     t.string('email')
  //   },
  // })
  
  // const PostCreateInput = inputObjectType({
  //   name: 'PostCreateInput',
  //   definition(t) {
  //     t.nonNull.string('title')
  //     t.string('content')
  //   },
  // })
  
  // const UserCreateInput = inputObjectType({
  //   name: 'UserCreateInput',
  //   definition(t) {
  //     t.nonNull.string('email')
  //     t.string('name')
  //     t.list.nonNull.field('posts', { type: 'PostCreateInput' })
  //   },
  // })
  
  // const schema = makeSchema({
  //   types: [
  //     Query,
  //     Mutation,
  //     Post,
  //     User,
  //     UserUniqueInput,
  //     UserCreateInput,
  //     PostCreateInput,
  //     SortOrder,
  //     PostOrderByUpdatedAtInput,
  //     DateTime,
  //   ],
  //   outputs: {
  //     schema: __dirname + '/../schema.graphql',
  //     typegen: __dirname + '/generated/nexus.ts',
  //   },
  //   sourceTypes: {
  //     modules: [
  //       {
  //         module: '@prisma/client',
  //         alias: 'prisma',
  //       },
  //     ],
  //   },
  // })
  
  // module.exports = {
  //   schema: schema,
  // }

  const {
    makeSchema,
    nonNull,
    objectType,
    arg,
    asNexusMethod,
    stringArg,
  } = require('nexus')
  const { DateTimeResolver } = require('graphql-scalars')
  const bcrypt=require("bcrypt");
  const jwt=require("jsonwebtoken") ;

  
  const DateTime = asNexusMethod(DateTimeResolver, 'date')
  
  const Query = objectType({
    name: 'Query',
    definition(t) {
      t.nonNull.list.nonNull.field('allUsers', {
        type: 'User',
        resolve: (_parent, _args, context) => {
          return context.prisma.user.findMany()
        },
      })
  },
});

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.nonNull.field('signupUser', {
      type: 'User',
      args: {
        username: stringArg(),
        email: stringArg(),
        password: nonNull(stringArg())
      },
      resolve: async(_, args, context) => {
        const password=await bcrypt.hash(args.password,10);
        if(args.username?.length){

          const user = await context.prisma.user.findUnique({
            where: { username: args.username}
          })
          if(user){
            throw Error("User already exists")
          }
        }
        if(args.email?.length){
          const user = await context.prisma.user.findUnique({
            where: { email: args.email}
          })
          if(user){
            throw Error("User already exists")
          }
        }
        if(!args.email?.length && !args.username?.length){
          throw Error("you need to fill details")
        }
        const data = {}
        if(args.email?.length)data["email"] = args.email
        if(args.username?.length)data["username"] = args.username
        data["password"] = password
        return context.prisma.user.create({
          data
        })
      },
    })
    t.nonNull.field('loginuser',{
       type:'Login',
       args: {
        username: nonNull(stringArg()),
        password: nonNull(stringArg()),

       },
       resolve: async (_parent, args, context) => {
        const user = await context.prisma.user.findUnique({
          where: { username: args.username },
        });
        if (!user) {
          throw new Error("No user found");
        }
        const isValid = await bcrypt.compare(args.password, user.password);
        if (!isValid) {
          throw new Error("Invalid password");
        }
        return {
          token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET,{ expiresIn: '1h' }),
          user,
        };
      }


    })
  },
});
 
 const Login=objectType({
name:"Login",
definition(t) {
  t.string("token")
  t.nonNull.field("user",{type:"User"})
}

 })
//add email
const User = objectType({
    name: 'User',
    definition(t) {
      t.nonNull.string('id')
      t.string('username')
      t.string('email')
      t.nonNull.string('password')
      t.string('createdAt')
      t.string('updatedAt')
  
      t.list.nonNull.field('favoriteRecipes', {
        type: 'FavoriteRecipe',
        resolve: (parent, _, context) => {
          return context.prisma.user
            .findUnique({
              where: { id: parent.id || undefined },
            })
            .favoriteRecipes()
        },
      })
      t.list.nonNull.field('shoppingLists', {
        type: 'ShoppingList',
        resolve: (parent, _, context) => {
          return context.prisma.user
            .findUnique({
              where: { id: parent.id || undefined },
            })
            .shoppingLists()
        },
      })
    },
  })

  const ShoppingList =objectType({
    name:"ShoppingList",
    definition(t) {
        t.nonNull.string('id')
        t.nonNull.string('name')
        t.string('createdAt')
        t.string('updatedAt')
        t.nonNull.string('ownerId')
        t.nonNull.field('owner',{
          type: 'User',
          resolve: (parent, _, context) => {
            return context.prisma.shoppingList
              .findUnique({
                where: { id: parent.id || undefined },
              })
              .shoppingList()
        }}
      )
      t.list.nonNull.field('owner',{
        type: 'ShoppingListItem',
        resolve: (parent, _, context) => {
          return context.prisma.shoppingList
            .findUnique({
              where: { id: parent.id || undefined },
            })
            .shoppingListItems()
      }}
    )
    },
  })

  const ShoppingListItem=objectType({
    name:"ShoppingListItem",
    definition(t) {
      
      t.nonNull.string('id')
        t.nonNull.string('name')
        t.float('quantity')
        t.string('createdAt')
        t.string('unit')
        t.boolean('isChecked')
        t.nonNull.string('shoppingListId')
        t.string('updatedAt')

        t.list.nonNull.field('shoppingList',{
          type: 'ShoppingList',
          resolve: (parent, _, context) => {
            return context.prisma.shoppingListItem
              .findUnique({
                where: { id: parent.id || undefined },
              })
              .shoppingList()
        }}
      )
        
    }
  })

  const FavoriteRecipe =objectType({
    name:"FavoriteRecipe",
    definition(t) {
        
        t.nonNull.string('id')
        t.nonNull.string('userId')
        t.string('recipeId')
        t.list.nonNull.field('user',{
          type: 'User',
          resolve: (parent, _, context) => {
            return context.prisma.favoriteRecipe
              .findUnique({
                where: { id: parent.id || undefined },
              })
              .user()
        }}
      )
      t.list.nonNull.field('recipe',{
        type: 'Recipe',
        resolve: (parent, _, context) => {
          return context.prisma.favoriteRecipe
            .findUnique({
              where: { id: parent.id || undefined },
            })
            .recipe()
      }}
    )
      

    },
  })

  const Recipe =objectType({
    name:"FavoriteRecipe",
    definition(t) {

      t.nonNull.string('id')
        t.nonNull.string('externalApiId')
        t.string('description')
        t.string('instructions')
        t.string('imageUrl')
        t.int('servings')
        t.int('prepTime')
        t.int('cookTime')
        t.int('totalTime')
        t.string('title')
        t.string('createdAt')
        t.string('updatedAt')
        t.list.nonNull.field('favoritedBy',{
          type: 'FavoriteRecipe',
          resolve: (parent, _, context) => {
            return context.prisma.Recipe
              .findUnique({
                where: { id: parent.id || undefined },
              })
              .favoritedBys()
        }}
      )
    }})
  const schema = makeSchema({
      types: [
        Query,
        Mutation,
        
        User,
        // FavoriteRecipe,
        ShoppingList,
        ShoppingListItem,
        Login,
        
       Recipe,
       
       
        DateTime,
      ],
      outputs: {
        schema: __dirname + '/../schema.graphql',
        typegen: __dirname + '/generated/nexus.ts',
      },
      sourceTypes: {
        modules: [
          {
            module: '@prisma/client',
            alias: 'prisma',
          },
        ],
      },
    })
    
    module.exports = {
      schema: schema,
    }
  