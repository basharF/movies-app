namespace movies_app;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Movie
{
    [Key]
    [Column("MOVIE_ID")]
    public int movieId { get; set; }
    [Column("MOVIE_TITLE")]
    public string? movieTitle { get; set; }
    [Column("MOVIE_YEAR")]
    public int? movieYear { get; set; }
    [Column("MOVIE_GENRES")]
    public string? movieGenres { get; set; }
    [Column("MOVIE_IMDB_ID")]
    public int? movieImdbId { get; set; }
    [Column("MOVIE_RATING")]
    public double? movieRating { get; set; }
    [Column("MOVIE_NUMBER_OF_VOTERS")]
    public int? movieNumberOfVoters { get; set; }
    [Column("MOVIE_RANK")]
    public int? movieRank { get; set; }
    [Column("MOVIE_ALT_RANK")]
    public int? movieAltRank { get; set; }
}
