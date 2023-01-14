// using System;
// using System.Linq;
// using movies_app;
// using movies_app.data.MovieContext;

// namespace ContosoUniversity.Data
// {
//     public static class DbInitializer
//     {
//         public static void Initialize(MovieContext context)
//         {
//             context.Database.EnsureCreated();

//             // Look for any students.
//             if (context.Movies.Any())
//             {
//                 return;   // DB has been seeded
//             }

//             var movies = new Movie[]
//             {
//             new Movie{MOVIE_ID=1,MOVIE_TITLE="Heat"},
//             new Movie{MOVIE_ID=2,MOVIE_TITLE="The Rock"},
//             };
//             foreach (Movie s in movies)
//             {
//                 context.Movies.Add(s);
//             }
//             context.SaveChanges();
//         }
//     }
// }