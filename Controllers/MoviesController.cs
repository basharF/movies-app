using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using movies_app.data.MovieContext;
using Newtonsoft.Json;
using static System.Runtime.InteropServices.JavaScript.JSType;
using Microsoft.EntityFrameworkCore;

namespace movies_app.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MoviesController : Controller
    {
        private readonly ILogger<MoviesController> _logger;
        private readonly IConfiguration _configuration;
        private readonly MovieContext _context;

        public MoviesController(ILogger<MoviesController> logger, IConfiguration configuration, MovieContext context)
        {
            _logger = logger;
            _configuration = configuration;
            _context = context;
        }

        [EnableCors("MyPolicy")]
        [HttpGet]
        public string getAllMovies()
        {
            var movies = _context.Movies;
            return JsonConvert.SerializeObject(movies);
        }

        // [Microsoft.AspNetCore.Authorization.Authorize]
        [EnableCors("MyPolicy")]
        [HttpGet("{id}/byId")]
        public string getMovieById(int id)
        {
            var movie = _context.Movies.Where(m => m.movieId == id);
            return JsonConvert.SerializeObject(movie);
        }

        [EnableCors("MyPolicy")]
        [HttpGet("{text}/byText")]
        public string getMovieByText(string text)
        {
            var movie = _context.Movies.Where(m => m.movieTitle.Contains(text));
            return JsonConvert.SerializeObject(movie);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }

    }
}




        // [EnableCors("MyPolicy")]
        // [HttpGet]
        // public string Get()
        // {
        //     string query = @"SELECT TOP(1000) MOVIE_ID, MOVIE_TITLE, MOVIE_GENRES,
        //                     ISNULL(ROUND((CONVERT(float,COUNT(R.RATING_USER_ID))/(COUNT(R.RATING_USER_ID)+25000)) * AVG(RATING) + (25000.0/(COUNT(R.RATING_USER_ID)+25000)) *3.0, 1), 0) WEIGHTED_AVERAGE_RATING,
        //                     ISNULL(COUNT(R.RATING_USER_ID), 0) NUMBER_OF_VOTERS
        //                     FROM MOVIES M
        //                     LEFT JOIN RATINGS R ON R.RATING_MOVIE_ID = M.MOVIE_ID
        //                     GROUP BY MOVIE_ID, MOVIE_TITLE, MOVIE_GENRES
        //                     ORDER BY (CONVERT(float,COUNT(R.RATING_USER_ID))/(COUNT(R.RATING_USER_ID)+25000)) * AVG(RATING) + (25000.0/(COUNT(R.RATING_USER_ID)+25000)) *3.0 DESC";
        //     DataTable dt = new DataTable();
        //     string sqlDataSource = _configuration.GetConnectionString("MOVIES_LENS_CONNECTION");
        //     SqlDataAdapter da = new SqlDataAdapter(query, sqlDataSource);
        //     da.Fill(dt);
        //     List<Movie> moviesList = new List<Movie>();
        //     if (dt.Rows.Count > 0)
        //     {
        //         for (int i = 0; i < dt.Rows.Count; i++)
        //         {
        //             Movie movie = new Movie();
        //             movie.movieId = Convert.ToInt32(dt.Rows[i]["MOVIE_ID"]);
        //             movie.movieTitle = Convert.ToString(dt.Rows[i]["MOVIE_TITLE"]);
        //             movie.movieGenres = Convert.ToString(dt.Rows[i]["MOVIE_GENRES"]);
        //             movie.movieRating = Convert.ToDouble(dt.Rows[i]["WEIGHTED_AVERAGE_RATING"]);
        //             movie.movieNumberOfVoters = Convert.ToInt32(dt.Rows[i]["NUMBER_OF_VOTERS"]);
        //             moviesList.Add(movie);
        //         }
        //     }

        //     return JsonConvert.SerializeObject(moviesList);
        // }