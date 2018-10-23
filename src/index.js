const d3 = require("d3");
const _ = require('underscore');

let name1 = 'jessica lange',
    name2 = 'sarah paulson',
    // actor1Data = [],
    // actor2Data = [];
    actor1Data = {"birthName":"Jessica Phyllis Lange","height":"5' 8\" (1.73 m)","bio":"Jessica Lange was born in 1949, in Cloquet, Minnesota, USA, where her father worked as a traveling salesman. She obtained a scholarship to study art at the University of Minnesota, but instead went to Paris to study drama. She moved to New York, working as a model, until producer Dino De Laurentiis cast her as the female lead in King Kong (1976). The film attracted much unfavorable comment and, as a result, Lange was off the screen for three years. She was given a small but showy part in Bob Fosse's All That Jazz (1979), before giving a memorable performance in Bob Rafelson's The Postman Always Rings Twice (1981), as an adulterous waitress. The following year, she won rave reviews for her exceptional portrayal of actress Frances Farmer in Frances (1982) and a Best Supporting Actress Academy Award for her work in Sydney Pollack's Tootsie (1982) (as a beautiful soap-opera actress). She was also outstanding as country singer Patsy Cline in Karel Reisz's Sweet Dreams (1985) and as a lawyer who defends her father and discovers his past in Music Box (1989). Other important films include Martin Scorsese's Cape Fear (1991) (as a frightened housewife) and Tony Richardson's Blue Sky (1994), for which she won a Best Actress Academy Award as the mentally unbalanced wife of a military officer. She made her Broadway debut in 1992, playing \"Blanche\" in Tennessee Williams \"A Streetcar Named Desire\".","urlPhoto":"https://m.media-amazon.com/images/M/MV5BMjg5ODIyMjY0NF5BMl5BanBnXkFtZTcwNDcyNjY0MQ@@._V1_UY317_CR21,0,214,317_AL_.jpg","urlIMDB":"http://www.imdb.com/name/nm0001448","name":"Jessica Lange","nicknames":["Jessie"],"idIMDB":"nm0001448","uniqueName":"Jessica Lange (I)","filmographies":[{"section":"Actress","filmography":[{"title":"American Horror Story","year":" 2011-2018","remarks":["(TV Series)"],"imdbid":"tt1844624"},{"title":"Feud","year":" 2017","remarks":["(TV Series)"],"imdbid":"tt1984119"},{"title":"Wild Oats","year":" 2016","remarks":null,"imdbid":"tt1655461"},{"title":"Horace and Pete","year":" 2016","remarks":["(TV Series)"],"imdbid":"tt5425186"},{"title":"The Gambler","year":" 2014/III","remarks":null,"imdbid":"tt2039393"},{"title":"Scorsese's Women","year":" 2014","remarks":["(Video short)"],"imdbid":"tt7801978"},{"title":"In Secret","year":" 2013","remarks":null,"imdbid":"tt0409379"},{"title":"The Vow","year":" 2012","remarks":null,"imdbid":"tt1606389"},{"title":"Grey Gardens","year":" 2009","remarks":["(TV Movie)"],"imdbid":"tt0758751"},{"title":"Sybil","year":" 2007","remarks":["(TV Movie)"],"imdbid":"tt0499260"},{"title":"Bonneville","year":" 2006","remarks":null,"imdbid":"tt0487195"},{"title":"Neverwas","year":" 2005","remarks":null,"imdbid":"tt0418004"},{"title":"Don't Come Knocking","year":" 2005","remarks":null,"imdbid":"tt0377800"},{"title":"Broken Flowers","year":" 2005","remarks":null,"imdbid":"tt0412019"},{"title":"Big Fish","year":" 2003","remarks":null,"imdbid":"tt0319061"},{"title":"Masked and Anonymous","year":" 2003","remarks":null,"imdbid":"tt0319829"},{"title":"Normal","year":" 2003","remarks":["(TV Movie)"],"imdbid":"tt0338290"},{"title":"Prozac Nation","year":" 2001","remarks":null,"imdbid":"tt0236640"},{"title":"Titus","year":" 1999","remarks":null,"imdbid":"tt0120866"},{"title":"Les Contes de mon enfance","year":" 1998","remarks":["(TV Series)"],"imdbid":"tt0166935"},{"title":"Cousin Bette","year":" 1998","remarks":null,"imdbid":"tt0118894"},{"title":"Hush","year":" 1998","remarks":null,"imdbid":"tt0118744"},{"title":"A Thousand Acres","year":" 1997","remarks":null,"imdbid":"tt0120323"},{"title":"A Streetcar Named Desire","year":" 1995","remarks":["(TV Movie)"],"imdbid":"tt0114565"},{"title":"Rob Roy","year":" 1995","remarks":null,"imdbid":"tt0114287"},{"title":"Losing Isaiah","year":" 1995","remarks":null,"imdbid":"tt0113691"},{"title":"Blue Sky","year":" 1994","remarks":null,"imdbid":"tt0109306"},{"title":"Night and the City","year":" 1992","remarks":null,"imdbid":"tt0105001"},{"title":"O Pioneers!","year":" 1992","remarks":["(TV Movie)"],"imdbid":"tt0105038"},{"title":"Cape Fear","year":" 1991","remarks":null,"imdbid":"tt0101540"},{"title":"Men Don't Leave","year":" 1990","remarks":null,"imdbid":"tt0100134"},{"title":"Music Box","year":" 1989","remarks":null,"imdbid":"tt0100211"},{"title":"Everybody's All-American","year":" 1988","remarks":null,"imdbid":"tt0095119"},{"title":"Far North","year":" 1988","remarks":null,"imdbid":"tt0095135"},{"title":"Crimes of the Heart","year":" 1986","remarks":null,"imdbid":"tt0090886"},{"title":"Sweet Dreams","year":" 1985","remarks":null,"imdbid":"tt0090110"},{"title":"Country","year":" 1984","remarks":null,"imdbid":"tt0087091"},{"title":"Cat on a Hot Tin Roof","year":" 1984","remarks":["(TV Movie)"],"imdbid":"tt0088888"},{"title":"Frances","year":" 1982","remarks":null,"imdbid":"tt0083967"},{"title":"Tootsie","year":" 1982","remarks":null,"imdbid":"tt0084805"},{"title":"The Postman Always Rings Twice","year":" 1981","remarks":null,"imdbid":"tt0082934"},{"title":"How to Beat the High Co$t of Living","year":" 1980","remarks":null,"imdbid":"tt0080895"},{"title":"All That Jazz","year":" 1979","remarks":null,"imdbid":"tt0078754"},{"title":"King Kong","year":" 1976","remarks":null,"imdbid":"tt0074751"}]},{"section":"Producer","filmography":[{"title":"Feud","year":" 2017","remarks":["(TV Series)","(producer - 8 episodes)"],"imdbid":"tt1984119"},{"title":"Country","year":" 1984","remarks":["(producer)"],"imdbid":"tt0087091"}]},{"section":"Soundtrack","filmography":[{"title":"Großstadtrevier","year":" 2017","remarks":["(TV Series)","(performer - 1 episode)"],"imdbid":"tt0090440"},{"title":"American Horror Story","year":" 2012-2015","remarks":["(TV Series)","(performer - 7 episodes)"],"imdbid":"tt1844624"},{"title":"Grey Gardens","year":" 2009","remarks":["(TV Movie)","(performer: \"Tea For Two\", \"I Won't Dance\", \"We Belong Together\", \"Can't Help Lovin' Dat Man\")"],"imdbid":"tt0758751"}]},{"section":"Thanks","filmography":[{"title":"Name That Film","year":" 2017","remarks":["(TV Series)","(special thanks - 1 episode)"],"imdbid":"tt7192798"},{"title":"The Big Wedding","year":" 2013","remarks":["(thanks)"],"imdbid":"tt1931435"}]},{"section":"Self","filmography":[{"title":"The Needs of Kim Stanley","year":" ","remarks":["(Documentary)"],"imdbid":"tt0434227"},{"title":"Female Brando: The Enigmatic Legacy of Kim Stanley","year":" 2018","remarks":["(Documentary)"],"imdbid":"tt8174222"},{"title":"Celebrity Page","year":" 2018","remarks":["(TV Series)"],"imdbid":"tt3503424"},{"title":"Antonio Lopez 1970: Sex Fashion & Disco","year":" 2017","remarks":["(Documentary)"],"imdbid":"tt5792490"},{"title":"The 69th Primetime Emmy Awards","year":" 2017","remarks":["(TV Special)"],"imdbid":"tt7162324"},{"title":"Close Up with the Hollywood Reporter","year":" 2015-2017","remarks":["(TV Series)"],"imdbid":"tt4931888"},{"title":"Extra","year":" 2014-2017","remarks":["(TV Series)"],"imdbid":"tt0247094"},{"title":"Ellen: The Ellen DeGeneres Show","year":" 2009-2017","remarks":["(TV Series)"],"imdbid":"tt0379623"},{"title":"Good Morning America","year":" 1995-2017","remarks":["(TV Series)"],"imdbid":"tt0072506"},{"title":"Live! with Kelly","year":" 2015-2017","remarks":["(TV Series)"],"imdbid":"tt0096636"},{"title":"The Late Show with Stephen Colbert","year":" 2017","remarks":["(TV Series)"],"imdbid":"tt3697842"},{"title":"Entertainment Tonight","year":" 2008-2017","remarks":["(TV Series)"],"imdbid":"tt0081857"},{"title":"The Insider","year":" 2017","remarks":["(TV Series)"],"imdbid":"tt0430836"},{"title":"The Late Late Show with James Corden","year":" 2017","remarks":["(TV Series)"],"imdbid":"tt4280606"},{"title":"World Premiere","year":" 2017","remarks":["(TV Series)"],"imdbid":"tt0800381"},{"title":"The 70th Annual Tony Awards","year":" 2016","remarks":["(TV Special)"],"imdbid":"tt5626484"},{"title":"Charlie Rose","year":" 1997-2016","remarks":["(TV Series)"],"imdbid":"tt0270116"},{"title":"The 67th Primetime Emmy Awards","year":" 2015","remarks":["(TV Special)"],"imdbid":"tt4969466"},{"title":"Variety Studio: Actors on Actors","year":" 2015","remarks":["(TV Series)"],"imdbid":"tt4267324"},{"title":"Cinema 3","year":" 2015","remarks":["(TV Series)"],"imdbid":"tt0111920"},{"title":"72nd Golden Globe Awards","year":" 2015","remarks":["(TV Special)"],"imdbid":"tt3270224"},{"title":"Late Night with Seth Meyers","year":" 2015","remarks":["(TV Series)"],"imdbid":"tt3513388"},{"title":"The 66th Primetime Emmy Awards","year":" 2014","remarks":["(TV Special)"],"imdbid":"tt3860114"},{"title":"20th Annual Screen Actors Guild Awards","year":" 2014","remarks":["(TV Special)"],"imdbid":"tt3477194"},{"title":"71st Golden Globe Awards","year":" 2014","remarks":["(TV Special)","Herself - Nominee (uncredited)"],"imdbid":"tt3262722"},{"title":"Tavis Smiley","year":" 2013","remarks":["(TV Series)"],"imdbid":"tt0403813"},{"title":"The 65th Primetime Emmy Awards","year":" 2013","remarks":["(TV Special)"],"imdbid":"tt3170732"},{"title":"19th Annual Screen Actors Guild Awards","year":" 2013","remarks":["(TV Special)"],"imdbid":"tt2660550"},{"title":"70th Golden Globe Awards","year":" 2013","remarks":["(TV Special)"],"imdbid":"tt2604420"},{"title":"The View","year":" 2005-2013","remarks":["(TV Series)"],"imdbid":"tt0123366"},{"title":"Jimmy Kimmel Live!","year":" 2012","remarks":["(TV Series)"],"imdbid":"tt0320037"},{"title":"Behind the Fright: The Making of American Horror Story","year":" 2012","remarks":["(Video short)"],"imdbid":"tt2547870"},{"title":"The 64th Primetime Emmy Awards","year":" 2012","remarks":["(TV Special)"],"imdbid":"tt2262378"},{"title":"Red Carpet Report","year":" 2012","remarks":["(TV Series short)"],"imdbid":"tt5611414"},{"title":"18th Annual Screen Actors Guild Awards","year":" 2012","remarks":["(TV Special)"],"imdbid":"tt2224007"},{"title":"The 69th Annual Golden Globe Awards","year":" 2012","remarks":["(TV Special)"],"imdbid":"tt2125640"},{"title":"The Late Late Show with Craig Ferguson","year":" 2009-2011","remarks":["(TV Series)"],"imdbid":"tt0437729"},{"title":"Miradas 2","year":" 2011","remarks":["(TV Series documentary)"],"imdbid":"tt0454730"},{"title":"The 67th Annual Golden Globe Awards","year":" 2010","remarks":["(TV Special)"],"imdbid":"tt1564372"},{"title":"The 61st Primetime Emmy Awards","year":" 2009","remarks":["(TV Special)"],"imdbid":"tt1503169"},{"title":"The 63rd Annual Tony Awards","year":" 2009","remarks":["(TV Special)"],"imdbid":"tt1449266"},{"title":"The 66th Annual Golden Globe Awards","year":" 2009","remarks":["(TV Special)"],"imdbid":"tt1222814"},{"title":"A Better Man: The Making of Tootsie","year":" 2008","remarks":["(Video documentary)"],"imdbid":"tt2351141"},{"title":"Richard & Judy","year":" 2007","remarks":["(TV Series)"],"imdbid":"tt0299374"},{"title":"Broken Flowers: Start to Finish","year":" 2006","remarks":["(Video documentary short)","Herself (uncredited)"],"imdbid":"tt0824743"},{"title":"The Peace! DVD","year":" 2005","remarks":["(Video documentary)"],"imdbid":"tt0477062"},{"title":"Working in the Theatre","year":" 2005","remarks":["(TV Series documentary)"],"imdbid":"tt0991344"},{"title":"Peace by Peace: Women on the Frontlines","year":" 2004","remarks":["(Documentary)"],"imdbid":"tt0805584"},{"title":"HBO First Look","year":" 2004","remarks":["(TV Series documentary short)"],"imdbid":"tt0318220"},{"title":"The 61st Annual Golden Globe Awards","year":" 2004","remarks":["(TV Special)"],"imdbid":"tt0395093"},{"title":"'Masked & Anonymous' Exposed","year":" 2003","remarks":["(Video documentary short)"],"imdbid":"tt0428190"},{"title":"Documentary: National March on Washington Against the War on Iraq","year":" 2003","remarks":["(Documentary)"],"imdbid":"tt2165723"},{"title":"XXI Century","year":" 2003","remarks":["(TV Series documentary)"],"imdbid":"tt0408349"},{"title":"HARDtalk","year":" 2003","remarks":["(TV Series)"],"imdbid":"tt0386208"},{"title":"Late Show with David Letterman","year":" 2003","remarks":["(TV Series)"],"imdbid":"tt0106053"},{"title":"Nobel Peace Prize Concert","year":" 2002","remarks":["(TV Special documentary)"],"imdbid":"tt0348855"},{"title":"Premio Donostia a Jessica Lange","year":" 2002","remarks":["(TV Special)"],"imdbid":"tt0426176"},{"title":"Bravo Profiles","year":" 2002","remarks":["(TV Series documentary)"],"imdbid":"tt0288347"},{"title":"Gala Paramount Pictures Celebrates 90th Anniversary with 90 Stars for 90 Years","year":" 2002","remarks":["(TV Special)"],"imdbid":"tt2170514"},{"title":"A Hollywood Life: Remembering Frances","year":" 2001","remarks":["(Video short)"],"imdbid":"tt0452792"},{"title":"The Making of 'Cape Fear'","year":" 2001/I","remarks":["(Video documentary)"],"imdbid":"tt0344021"},{"title":"The Making of 'Titus'","year":" 2000","remarks":["(Video documentary)","Herself (uncredited)"],"imdbid":"tt0295417"},{"title":"Biography","year":" 2000","remarks":["(TV Series documentary)"],"imdbid":"tt0092322"},{"title":"The Rosie O'Donnell Show","year":" 1997-2000","remarks":["(TV Series)"],"imdbid":"tt0115338"},{"title":"The Tonight Show with Jay Leno","year":" 1998-2000","remarks":["(TV Series)"],"imdbid":"tt0103569"},{"title":"AFI's 100 Years... 100 Stars: America's Greatest Screen Legends","year":" 1999","remarks":["(TV Special documentary)"],"imdbid":"tt0251566"},{"title":"AFI Life Achievement Award: A Tribute to Dustin Hoffman","year":" 1999","remarks":["(TV Special documentary)"],"imdbid":"tt0196922"},{"title":"Intimate Portrait","year":" 1998","remarks":["(TV Series documentary)"],"imdbid":"tt0896232"},{"title":"Off the Menu: The Last Days of Chasen's","year":" 1997","remarks":["(Documentary)","Herself (uncredited)"],"imdbid":"tt0158831"},{"title":"The Evening Standard Drama Awards","year":" 1996","remarks":["(TV Special)"],"imdbid":"tt2304949"},{"title":"The 48th Annual Primetime Emmy Awards","year":" 1996","remarks":["(TV Special)"],"imdbid":"tt1600382"},{"title":"The 68th Annual Academy Awards","year":" 1996","remarks":["(TV Special)"],"imdbid":"tt0283830"},{"title":"The 53rd Annual Golden Globe Awards","year":" 1996","remarks":["(TV Special)"],"imdbid":"tt1800745"},{"title":"Inside the Actors Studio","year":" 1995","remarks":["(TV Series)"],"imdbid":"tt0169455"},{"title":"The 67th Annual Academy Awards","year":" 1995","remarks":["(TV Special)"],"imdbid":"tt0268875"},{"title":"CBS This Morning","year":" 1995","remarks":["(TV Series)"],"imdbid":"tt0355070"},{"title":"The 52nd Annual Golden Globe Awards","year":" 1995","remarks":["(TV Special)"],"imdbid":"tt0482447"},{"title":"The 20th Annual Los Angeles Film Critics Awards","year":" 1995","remarks":["(TV Special)"],"imdbid":"tt2392413"},{"title":"A Century of Cinema","year":" 1994","remarks":["(Documentary)"],"imdbid":"tt0109390"},{"title":"A Century of Women","year":" 1994","remarks":["(TV Mini-Series documentary)"],"imdbid":"tt0108720"},{"title":"AFI Life Achievement Award: A Tribute to Jack Nicholson","year":" 1994","remarks":["(TV Special)"],"imdbid":"tt0156040"},{"title":"Myrna Loy Remembered","year":" 1993","remarks":["(TV Movie documentary)"],"imdbid":"tt0351390"},{"title":"Vivien Leigh: Scarlett and Beyond","year":" 1990","remarks":["(TV Movie documentary)"],"imdbid":"tt0443284"},{"title":"The 62nd Annual Academy Awards","year":" 1990","remarks":["(TV Special)"],"imdbid":"tt0312314"},{"title":"The 47th Annual Golden Globe Awards","year":" 1990","remarks":["(TV Special)"],"imdbid":"tt1000697"},{"title":"AFI Life Achievement Award: A Tribute to Billy Wilder","year":" 1986","remarks":["(TV Special documentary)"],"imdbid":"tt0268600"},{"title":"The 58th Annual Academy Awards","year":" 1986","remarks":["(TV Special)"],"imdbid":"tt0353138"},{"title":"The 57th Annual Academy Awards","year":" 1985","remarks":["(TV Special documentary)"],"imdbid":"tt0353137"},{"title":"Hollywood '84","year":" 1984","remarks":["(TV Mini-Series documentary)"],"imdbid":"tt3028002"},{"title":"AFI Life Achievement Award: A Tribute to Lillian Gish","year":" 1984","remarks":["(TV Special documentary)","Herself (uncredited)"],"imdbid":"tt0268610"},{"title":"The 55th Annual Academy Awards","year":" 1983","remarks":["(TV Special)"],"imdbid":"tt0353135"},{"title":"AFI Life Achievement Award: A Tribute to John Huston","year":" 1983","remarks":["(TV Special)","Herself (uncredited)"],"imdbid":"tt0268608"},{"title":"AFI Life Achievement Award: A Tribute to Frank Capra","year":" 1982","remarks":["(TV Special documentary)","Herself (uncredited)"],"imdbid":"tt0138986"},{"title":"Notre Dame de la Croisette","year":" 1981","remarks":["(Documentary)","Herself (uncredited)"],"imdbid":"tt0082826"},{"title":"The 34th Annual Golden Globe Awards","year":" 1977","remarks":["(TV Special)"],"imdbid":"tt0881175"},{"title":"The Mike Douglas Show","year":" 1977","remarks":["(TV Series)"],"imdbid":"tt0170980"}]},{"section":"Archive footage","filmography":[{"title":"Celebrity Page","year":" 2018","remarks":["(TV Series)"],"imdbid":"tt3503424"},{"title":"The Late Show with Stephen Colbert","year":" 2017","remarks":["(TV Series)"],"imdbid":"tt3697842"},{"title":"Entertainment Tonight","year":" 2014-2017","remarks":["(TV Series)"],"imdbid":"tt0081857"},{"title":"Extra","year":" 2017","remarks":["(TV Series)"],"imdbid":"tt0247094"},{"title":"Aktorka","year":" 2015","remarks":["(Documentary)","Herself - Actress (Ann Talbot of 'Music Box')"],"imdbid":"tt5291038"},{"title":"Chelsea Lately","year":" 2012-2014","remarks":["(TV Series)"],"imdbid":"tt1002838"},{"title":"Welcome to the Basement","year":" 2013","remarks":["(TV Series)"],"imdbid":"tt4416750"},{"title":"Shepard & Dark","year":" 2012","remarks":["(Documentary)"],"imdbid":"tt2221784"},{"title":"Hollywood Singing & Dancing: A Musical History - 1980s, 1990s and 2000s","year":" 2009","remarks":["(Video documentary)"],"imdbid":"tt1498182"},{"title":"Ànima","year":" 2009","remarks":["(TV Series)"],"imdbid":"tt1394151"},{"title":"The O'Reilly Factor","year":" 2008","remarks":["(TV Series)"],"imdbid":"tt0284767"},{"title":"Fan-Made Music Videos","year":" 2008","remarks":["(TV Series short)"],"imdbid":"tt4573676"},{"title":"Premio Donostia a Matt Dillon","year":" 2006","remarks":["(TV Special)"],"imdbid":"tt0874992"},{"title":"Premio Donostia a Max Von Sydow","year":" 2006","remarks":["(TV Special)"],"imdbid":"tt0872154"},{"title":"Premio Donostia a Willem Dafoe","year":" 2005","remarks":["(TV Special)"],"imdbid":"tt0480712"},{"title":"Retrosexual: The 80's","year":" 2004","remarks":["(TV Mini-Series documentary)"],"imdbid":"tt0435578"},{"title":"Celsius 41.11: The Temperature at Which the Brain... Begins to Die","year":" 2004","remarks":["(Documentary)"],"imdbid":"tt0424885"},{"title":"E! True Hollywood Story","year":" 2002","remarks":["(TV Series documentary)"],"imdbid":"tt0463399"},{"title":"Biography","year":" 2001","remarks":["(TV Series documentary)"],"imdbid":"tt0092322"},{"title":"Hollywood Stuntmakers","year":" 1999","remarks":["(TV Series)"],"imdbid":"tt0101119"},{"title":"Omnibus","year":" 1999","remarks":["(TV Series documentary)"],"imdbid":"tt0200358"},{"title":"40 premis Sant Jordi de cinematografía","year":" 1996","remarks":["(TV Special)"],"imdbid":"tt1056234"},{"title":"The 64th Annual Academy Awards","year":" 1992","remarks":["(TV Special)"],"imdbid":"tt0266219"},{"title":"Oscar's Greatest Moments","year":" 1992","remarks":["(Video documentary)"],"imdbid":"tt0265471"},{"title":"Jessica Lange: It's Only Make-Believe","year":" 1991","remarks":["(TV Movie)"],"imdbid":"tt0319599"},{"title":"The Siskel & Ebert 500th Anniversary Special","year":" 1989","remarks":["(TV Movie)"],"imdbid":"tt0271186"},{"title":"King Kong Lives","year":" 1986","remarks":["Dwan (uncredited)"],"imdbid":"tt0091344"},{"title":"SP FX: Special Effects - The Empire Strikes Back","year":" 1980","remarks":["(TV Movie documentary)"],"imdbid":"tt0344288"}]}]},
    actor2Data = {"birthName":"Sarah Catharine Paulson","height":"5' 6\" (1.68 m)","bio":"Sarah Paulson was born on December 17, 1974 in Tampa, Florida, to Catharine Gordon (Dolcater) and Douglas Lyle Paulson II. She spent most of her early years in New York and Maine, before settling in Manhattan to attend the American Academy of Dramatic Arts and the High School for Performing Arts. Although she made her Broadway debut in \"The Sisters Rosensweig\" and performed in the off-Broadway \"Talking Pictures\", she debuted on the small screen in late 1994 in a guest shot on NBC's Law & Order (1990), then, in the following spring, landed her first TV-movie role in CBS' Friends at Last (1995) and finally became a TV series regular by fall 1995. Best known for her amazing performance in CBS' supernatural drama American Gothic (1995) as the benevolent spiritual guide to her young brother, she was also a regular on the WB series Jack & Jill (1999) as \"Elisa Cronkite\", the former girlfriend of David \"Jill\" Jillefsky (Ivan Sergei) as well as the main character in the TV series Leap of Faith (2002), \"Faith Wardwell\", and as \"Audrey\" in the TV movie Metropolis (2000). She was also part of the cast of Shaughnessy (1996), The Long Way Home (1998) (as \"Leanne Bossert\") and Path to War (2002) as Luci Baines Johnson, as well as making notable appearances in Touched by an Angel (1994) playing \"Zoe\" in Touched by an Angel: Manhunt (2001), 20 October 2001, and Cracker: Mind Over Murder (1997) playing \"Nina\" in Cracker: Mind Over Murder: True Romance: Part 1 (1997), 18 September 1997. Sarah has now played in movies with such stars as Mel Gibson in the romantic comedy What Women Want (2000) (as \"Annie\", Gibson's secretary), Diane Keaton in the romantic drama The Other Sister (1999) (as \"Heather Tate\", Keaton's lesbian eldest daughter), Jamie Foxx in Held Up (1999) (as \"Mary\", a developmentally disabled young woman with an unfaithful boyfriend) and David Hyde Pierce in the romantic comedy Down with Love (2003) (as \"Vicky Hiller\", Pierce's crush). She also had two major roles in the comedy Bug (2002) and the drama, Levitation (1997), where she starred as a pregnant teenager who searches for her biological mother, with the help of a guardian angel.","urlPhoto":"https://m.media-amazon.com/images/M/MV5BMTUzMTA3NjM4MV5BMl5BanBnXkFtZTcwNjk1NTAyMg@@._V1_UX214_CR0,0,214,317_AL_.jpg","urlIMDB":"http://www.imdb.com/name/nm0005299","name":"Sarah Paulson","idIMDB":"nm0005299","uniqueName":"Sarah Paulson","filmographies":[{"section":"Actress","filmography":[{"title":"Run","year":" ","remarks":null,"imdbid":"tt8633478"},{"title":"Ratched","year":" 2018","remarks":["(TV Series)"],"imdbid":"tt7423538"},{"title":"The Goldfinch","year":" 2019","remarks":null,"imdbid":"tt3864056"},{"title":"Bird Box","year":" 2018","remarks":null,"imdbid":"tt2737304"},{"title":"Glass","year":" 2019","remarks":null,"imdbid":"tt6823368"},{"title":"American Crime Story","year":" 2015-2018","remarks":["(TV Series)"],"imdbid":"tt2788432"},{"title":"American Horror Story","year":" 2011-2018","remarks":["(TV Series)"],"imdbid":"tt1844624"},{"title":"Ocean's Eight","year":" 2018","remarks":null,"imdbid":"tt5164214"},{"title":"The Post","year":" 2017","remarks":null,"imdbid":"tt6294822"},{"title":"Feud","year":" 2017","remarks":["(TV Series)"],"imdbid":"tt1984119"},{"title":"Rebel in the Rye","year":" 2017","remarks":null,"imdbid":"tt4986134"},{"title":"Blue Jay","year":" 2016/I","remarks":null,"imdbid":"tt5912454"},{"title":"The Runner","year":" 2015/I","remarks":null,"imdbid":"tt3687398"},{"title":"Carol","year":" 2015","remarks":null,"imdbid":"tt2402927"},{"title":"#twitterkills","year":" 2014","remarks":["(Short)"],"imdbid":"tt3120512"},{"title":"12 Years a Slave","year":" 2013","remarks":null,"imdbid":"tt2024544"},{"title":"The Time Being","year":" 2012","remarks":null,"imdbid":"tt1916749"},{"title":"Blue","year":" 2012","remarks":["(TV Series)"],"imdbid":"tt2191148"},{"title":"Fairhaven","year":" 2012","remarks":null,"imdbid":"tt1341718"},{"title":"Mud","year":" 2012","remarks":null,"imdbid":"tt1935179"},{"title":"Game Change","year":" 2012","remarks":["(TV Movie)"],"imdbid":"tt1848902"},{"title":"Untitled Kari Lizer Project","year":" 2011","remarks":["(TV Movie)"],"imdbid":"tt1842531"},{"title":"New Year's Eve","year":" 2011","remarks":["Grace Schwab (segment \"Maternity Ward\")"],"imdbid":"tt1598822"},{"title":"Desperate Housewives","year":" 2007-2011","remarks":["(TV Series)"],"imdbid":"tt0410975"},{"title":"After-School Special","year":" 2011","remarks":["(Short)"],"imdbid":"tt1776052"},{"title":"Martha Marcy May Marlene","year":" 2011","remarks":null,"imdbid":"tt1441326"},{"title":"November Christmas","year":" 2010","remarks":["(TV Movie)"],"imdbid":"tt1708658"},{"title":"Grey's Anatomy","year":" 2010","remarks":["(TV Series)"],"imdbid":"tt0413573"},{"title":"Law & Order: Special Victims Unit","year":" 2010","remarks":["(TV Series)"],"imdbid":"tt0203259"},{"title":"Cupid","year":" 2009","remarks":["(TV Series)"],"imdbid":"tt1143289"},{"title":"Whose Dog Is It Anyway?","year":" 2009","remarks":["(Short)"],"imdbid":"tt1418967"},{"title":"The Spirit","year":" 2008","remarks":null,"imdbid":"tt0831887"},{"title":"Puppy Love","year":" 2008","remarks":["(TV Series)"],"imdbid":"tt1358872"},{"title":"Pretty/Handsome","year":" 2008","remarks":["(TV Movie)"],"imdbid":"tt0871425"},{"title":"Studio 60 on the Sunset Strip","year":" 2006-2007","remarks":["(TV Series)"],"imdbid":"tt0485842"},{"title":"A Christmas Wedding","year":" 2006","remarks":["(TV Movie)"],"imdbid":"tt0486292"},{"title":"Griffin & Phoenix","year":" 2006","remarks":null,"imdbid":"tt0460812"},{"title":"Diggers","year":" 2006","remarks":null,"imdbid":"tt0469897"},{"title":"The Notorious Bettie Page","year":" 2005","remarks":null,"imdbid":"tt0404802"},{"title":"Serenity","year":" 2005","remarks":null,"imdbid":"tt0379786"},{"title":"Deadwood","year":" 2005","remarks":["(TV Series)"],"imdbid":"tt0348914"},{"title":"Swimmers","year":" 2005","remarks":null,"imdbid":"tt0384573"},{"title":"Nip/Tuck","year":" 2004","remarks":["(TV Series)"],"imdbid":"tt0361217"},{"title":"The D.A.","year":" 2004","remarks":["(TV Series)"],"imdbid":"tt0397139"},{"title":"Down with Love","year":" 2003","remarks":null,"imdbid":"tt0309530"},{"title":"Path to War","year":" 2002","remarks":["(TV Movie)"],"imdbid":"tt0218505"},{"title":"Leap of Faith","year":" 2002","remarks":["(TV Series)"],"imdbid":"tt0291628"},{"title":"Bug","year":" 2002","remarks":null,"imdbid":"tt0277615"},{"title":"Touched by an Angel","year":" 2001","remarks":["(TV Series)"],"imdbid":"tt0108968"},{"title":"Jack & Jill","year":" 1999-2001","remarks":["(TV Series)"],"imdbid":"tt0207889"},{"title":"Metropolis","year":" 2000","remarks":["(TV Movie)"],"imdbid":"tt0246077"},{"title":"What Women Want","year":" 2000","remarks":null,"imdbid":"tt0207201"},{"title":"Held Up","year":" 1999","remarks":null,"imdbid":"tt0165831"},{"title":"The Other Sister","year":" 1999","remarks":null,"imdbid":"tt0123209"},{"title":"Real Life","year":" 1998","remarks":["(TV Series)"],"imdbid":"tt0239189"},{"title":"The Long Way Home","year":" 1998","remarks":["(TV Movie)"],"imdbid":"tt0143436"},{"title":"American Gothic","year":" 1995-1998","remarks":["(TV Series)"],"imdbid":"tt0111880"},{"title":"Cracker: Mind Over Murder","year":" 1997","remarks":["(TV Series)"],"imdbid":"tt0118290"},{"title":"Levitation","year":" 1997","remarks":null,"imdbid":"tt0119525"},{"title":"Shaughnessy","year":" 1996","remarks":["(TV Movie)"],"imdbid":"tt0117625"},{"title":"Friends at Last","year":" 1995","remarks":["(TV Movie)"],"imdbid":"tt0113120"},{"title":"Law & Order","year":" 1994","remarks":["(TV Series)"],"imdbid":"tt0098844"}]},{"section":"Soundtrack","filmography":[{"title":"The 74th Golden Globe Awards","year":" 2017","remarks":["(TV Special)","(performer: \"Another Day of Sun\")"],"imdbid":"tt5824900"},{"title":"The Tonight Show Starring Jimmy Fallon","year":" 2016","remarks":["(TV Series)","(performer - 1 episode)"],"imdbid":"tt3444938"},{"title":"American Horror Story","year":" 2014","remarks":["(TV Series)","(performer - 1 episode)"],"imdbid":"tt1844624"}]},{"section":"Director","filmography":[{"title":"American Horror Story","year":" 2018","remarks":["(TV Series)","(1 episode)"],"imdbid":"tt1844624"}]},{"section":"Producer","filmography":[{"title":"The Loss of Lillian","year":" 2016","remarks":["(Short)","(executive producer)"],"imdbid":"tt5476276"}]},{"section":"Thanks","filmography":[{"title":"Telling of the Shoes","year":" 2014","remarks":["(grateful thanks)"],"imdbid":"tt1881064"}]},{"section":"Self","filmography":[{"title":"Access Hollywood","year":" 2018","remarks":["(TV Series)"],"imdbid":"tt0167515"},{"title":"Today","year":" 2014-2018","remarks":["(TV Series)"],"imdbid":"tt0044298"},{"title":"Jimmy Kimmel Live!","year":" 2014-2018","remarks":["(TV Series)"],"imdbid":"tt0320037"},{"title":"The 70th Primetime Emmy Awards","year":" 2018","remarks":["(TV Special)"],"imdbid":"tt8691808"},{"title":"Celebrity Page","year":" 2018","remarks":["(TV Series)"],"imdbid":"tt3503424"},{"title":"Conan","year":" 2018","remarks":["(TV Series)"],"imdbid":"tt1637574"},{"title":"Entertainment Tonight","year":" 2015-2018","remarks":["(TV Series)"],"imdbid":"tt0081857"},{"title":"The Graham Norton Show","year":" 2018","remarks":["(TV Series)"],"imdbid":"tt0924651"},{"title":"Good Morning Britain","year":" 2018","remarks":["(TV Series)"],"imdbid":"tt3644198"},{"title":"Lorraine","year":" 2018","remarks":["(TV Series)"],"imdbid":"tt0298674"},{"title":"Made in Hollywood","year":" 2011-2018","remarks":["(TV Series)"],"imdbid":"tt0911896"},{"title":"The Late Late Show with James Corden","year":" 2018","remarks":["(TV Series)"],"imdbid":"tt4280606"},{"title":"Off Camera with Sam Jones","year":" 2018","remarks":["(TV Series)"],"imdbid":"tt3473134"},{"title":"The IMDb Show","year":" 2018","remarks":["(TV Series)"],"imdbid":"tt7549864"},{"title":"Fox and Friends","year":" 2018","remarks":["(TV Series)"],"imdbid":"tt0185065"},{"title":"Entertainment Tonight Canada","year":" 2018","remarks":["(TV Series)"],"imdbid":"tt0482346"},{"title":"The Tonight Show Starring Jimmy Fallon","year":" 2016-2018","remarks":["(TV Series)"],"imdbid":"tt3444938"},{"title":"Ellen: The Ellen DeGeneres Show","year":" 2016-2018","remarks":["(TV Series)"],"imdbid":"tt0379623"},{"title":"The 75th Golden Globe Awards","year":" 2018","remarks":["(TV Special)"],"imdbid":"tt6635044"},{"title":"Extra","year":" 2016-2017","remarks":["(TV Series)"],"imdbid":"tt0247094"},{"title":"Late Night with Seth Meyers","year":" 2014-2017","remarks":["(TV Series)"],"imdbid":"tt3513388"},{"title":"The Late Show with Stephen Colbert","year":" 2016-2017","remarks":["(TV Series)"],"imdbid":"tt3697842"},{"title":"E! Live from the Red Carpet","year":" 2008-2017","remarks":["(TV Series)"],"imdbid":"tt4346344"},{"title":"The 69th Primetime Emmy Awards","year":" 2017","remarks":["(TV Special)"],"imdbid":"tt7162324"},{"title":"The 71st Annual Tony Awards","year":" 2017","remarks":["(TV Special)"],"imdbid":"tt6906362"},{"title":"The 23rd Annual Screen Actors Guild Awards","year":" 2017","remarks":["(TV Special)"],"imdbid":"tt6435824"},{"title":"The 74th Golden Globe Awards","year":" 2017","remarks":["(TV Special)"],"imdbid":"tt5824900"},{"title":"Full Frontal with Samantha Bee","year":" 2016","remarks":["(TV Series)"],"imdbid":"tt5323988"},{"title":"Live! with Kelly","year":" 2015-2016","remarks":["(TV Series)"],"imdbid":"tt0096636"},{"title":"The 68th Primetime Emmy Awards","year":" 2016","remarks":["(TV Special)"],"imdbid":"tt5889946"},{"title":"Close Up with the Hollywood Reporter","year":" 2016","remarks":["(TV Series)"],"imdbid":"tt4931888"},{"title":"Chelsea","year":" 2016","remarks":["(TV Series)"],"imdbid":"tt5672036"},{"title":"Variety Studio: Actors on Actors","year":" 2016","remarks":["(TV Series)"],"imdbid":"tt4267324"},{"title":"Inside Look: The People v. O.J. Simpson, American Crime Story","year":" 2016","remarks":["(TV Mini-Series documentary)"],"imdbid":"tt6205862"},{"title":"Good Morning America","year":" 2015-2016","remarks":["(TV Series)"],"imdbid":"tt0072506"},{"title":"IMDb First Credit","year":" 2016","remarks":["(TV Series)"],"imdbid":"tt5533446"},{"title":"Larry King Now","year":" 2016","remarks":["(TV Series)"],"imdbid":"tt2322438"},{"title":"World Premiere","year":" 2014-2016","remarks":["(TV Series)"],"imdbid":"tt0800381"},{"title":"21st Annual Critics' Choice Awards","year":" 2016","remarks":["(TV Special)"],"imdbid":"tt5350078"},{"title":"Rachael Ray","year":" 2015","remarks":["(TV Series)"],"imdbid":"tt0827947"},{"title":"American Horror Story: Freak Show, Two Heads Are Better Than One","year":" 2015","remarks":["(Video short)"],"imdbid":"tt5096498"},{"title":"Getting Freaky: A Peek Inside the Tent","year":" 2015","remarks":["(Video short)"],"imdbid":"tt5096480"},{"title":"The 67th Primetime Emmy Awards","year":" 2015","remarks":["(TV Special)"],"imdbid":"tt4969466"},{"title":"The Insider","year":" 2015","remarks":["(TV Series)"],"imdbid":"tt0430836"},{"title":"The 5th Annual Critics' Choice Television Awards","year":" 2015","remarks":["(TV Special)"],"imdbid":"tt4727464"},{"title":"The Late Late Show with Craig Ferguson","year":" 2011-2014","remarks":["(TV Series)"],"imdbid":"tt0437729"},{"title":"American Horror Story: Meet Ms. Nola - Shooting on Location in New Orleans","year":" 2014","remarks":["(Video short)"],"imdbid":"tt4299644"},{"title":"Enter the Coven","year":" 2014","remarks":["(Video short)"],"imdbid":"tt4299622"},{"title":"Late Show with David Letterman","year":" 2009-2014","remarks":["(TV Series)"],"imdbid":"tt0106053"},{"title":"The View","year":" 2014","remarks":["(TV Series)"],"imdbid":"tt0123366"},{"title":"The 66th Primetime Emmy Awards","year":" 2014","remarks":["(TV Special)"],"imdbid":"tt3860114"},{"title":"The Hollywood Reporter Roundtables","year":" 2014","remarks":["(TV Series)"],"imdbid":"tt3281320"},{"title":"12 Years a Slave: A Historical Portrait","year":" 2014","remarks":["(Video documentary)"],"imdbid":"tt3599702"},{"title":"The 2014 Film Independent Spirit Awards","year":" 2014","remarks":["(TV Special)"],"imdbid":"tt3410698"},{"title":"Chelsea Lately","year":" 2014","remarks":["(TV Series)"],"imdbid":"tt1002838"},{"title":"The Queen Latifah Show","year":" 2014","remarks":["(TV Series)"],"imdbid":"tt2099467"},{"title":"20th Annual Screen Actors Guild Awards","year":" 2014","remarks":["(TV Special)","Herself - Presenter (uncredited)"],"imdbid":"tt3477194"},{"title":"Big Morning Buzz Live","year":" 2013","remarks":["(TV Series)"],"imdbid":"tt1907886"},{"title":"The 65th Primetime Emmy Awards","year":" 2013","remarks":["(TV Special)"],"imdbid":"tt3170732"},{"title":"Mud: Southern Authenticity: Shooting the Real Arkansas","year":" 2013","remarks":["(Short)"],"imdbid":"tt3272232"},{"title":"A Personal Tale: Writing and Directing MUD","year":" 2013","remarks":["(Video short)"],"imdbid":"tt3272170"},{"title":"The Arkansas Ensemble the Distinctive Characters and Cast of Mud","year":" 2013","remarks":["(Short)"],"imdbid":"tt3272214"},{"title":"The Broadway.com Show","year":" 2013","remarks":["(TV Series)"],"imdbid":"tt2991622"},{"title":"Show People with Paul Wontorek","year":" 2013","remarks":["(TV Series)"],"imdbid":"tt2960832"},{"title":"Watch What Happens: Live","year":" 2013","remarks":["(TV Series)"],"imdbid":"tt2057880"},{"title":"70th Golden Globe Awards","year":" 2013","remarks":["(TV Special)"],"imdbid":"tt2604420"},{"title":"The 64th Primetime Emmy Awards","year":" 2012","remarks":["(TV Special)"],"imdbid":"tt2262378"},{"title":"Red Carpet Report","year":" 2012","remarks":["(TV Series short)"],"imdbid":"tt5611414"},{"title":"The Spirit: Green World","year":" 2009","remarks":["(Video short)"],"imdbid":"tt1649922"},{"title":"18th Annual GLAAD Media Awards","year":" 2007","remarks":["(TV Special)"],"imdbid":"tt1039942"},{"title":"The 64th Annual Golden Globe Awards","year":" 2007","remarks":["(TV Special)"],"imdbid":"tt0914790"},{"title":"The 59th Annual Tony Awards","year":" 2005","remarks":["(TV Special)","Herself - Audience Member (uncredited)"],"imdbid":"tt0463857"},{"title":"HBO First Look","year":" 2003","remarks":["(TV Series documentary short)"],"imdbid":"tt0318220"},{"title":"Late Night with Conan O'Brien","year":" 2002","remarks":["(TV Series)"],"imdbid":"tt0106052"},{"title":"The Rosie O'Donnell Show","year":" 2002","remarks":["(TV Series)"],"imdbid":"tt0115338"},{"title":"The Tonight Show with Jay Leno","year":" 2002","remarks":["(TV Series)"],"imdbid":"tt0103569"}]},{"section":"Archive footage","filmography":[{"title":"Celebrity Page","year":" 2018","remarks":["(TV Series)"],"imdbid":"tt3503424"},{"title":"Entertainment Tonight","year":" 2016-2018","remarks":["(TV Series)"],"imdbid":"tt0081857"},{"title":"Extra","year":" 2016-2018","remarks":["(TV Series)"],"imdbid":"tt0247094"},{"title":"Happy Pride! Sexy LGBT Stars","year":" 2017","remarks":["(Video short)"],"imdbid":"tt7643144"},{"title":"Hoy nos toca","year":" 2017","remarks":["(TV Series)"],"imdbid":"tt6436780"},{"title":"The Insider","year":" 2017","remarks":["(TV Series)"],"imdbid":"tt0430836"},{"title":"Stars in Shorts","year":" 2012","remarks":null,"imdbid":"tt2644980"},{"title":"The 64th Annual Tony Awards","year":" 2010","remarks":["(TV Special)"],"imdbid":"tt1671484"}]}]};


let actor1Roles = [],
    actor2Roles = [],
    getListEmoji;

const titleCase = (str) => {
  let splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i++) {
     splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}

const returnYears = (array) => {
  if(array.length > 1){
    let diff = parseInt(array[1]) - parseInt(array[0]);
    let allYears = [];
    for(let i = 0; i <= diff; i++){
      allYears.push(parseInt(array[0])+i);
    }
    return allYears;
  } else {
    return [parseInt(array[0])];
  }
}

const resultsPara = (ct) => {
  let substr = `starred together ${ct} times`;
  if(ct === 0){
    substr = `never starred together`;
  } else if(ct === 1){
    substr = `starred together ${ct} time`;
  }
  let parStr = `${actor1Data.name} and ${actor2Data.name} ${substr}.`
  d3.select('#resultsPara').append('p').html(parStr);
}

// const getListEmoji = () => {
//   return `${actor1Data['filmographies'][0]['section']}${actor2Data['filmographies'][0]['section']}`;
// }

const figureYears = (array) => {
  if(array.length === 1){
    return String(array[0]);
  } else {
    return `${String(array[0])} - ${String(array[array.length - 1])}`;
  }
}

const grammarPls = (justMissed) => {
  if(justMissed.length === 1){
    return justMissed[0];
  } else if(justMissed.length === 2){
    return justMissed.join(' and ');
  } else {
    justMissed[justMissed.length - 1] = `and ${justMissed[justMissed.length - 1]}`;
    return justMissed.join(', ');
  }
}

let showAsteriskDesc = false;

const isTV = (remarks) => {
  let ct = 0;
  if(remarks){
    remarks.forEach(remark => {
      if(remark.match('(TV Series)')){
        ct ++;
      }
    })
  }
  if(ct > 0){
    showAsteriskDesc = true;
    return '<span>*</span>';
  } else {
    return '';
  }
}

const resultsList = (overlap, justMissed) => {
  console.log(overlap, justMissed)
  d3.select('#resultsList').classed(getListEmoji, true)
    .selectAll('li')
    .data(overlap)
    .enter()
    .append('li')
    .html(d => { return `${d[0].title} (${figureYears(d[1])})${isTV(d[0].remarks)}`;});

  let justMissedStr = `${actor1Data.name} and ${actor2Data.name} have both starred in ${grammarPls(justMissed)}, but did not appear together.`
  if(justMissed.length > 0){
    d3.select('#justMissed').append('p').html(justMissedStr);
  }
  if(showAsteriskDesc){
    d3.select('#asterisk').style('display', 'block');
  }
}

const compare = (ids1, ids2) => {
  let ct = 0;
  let intersect = _.intersection(ids1, ids2);
  let overlap = [],
      justMissed = [];
  intersect.forEach(id => {
    let a1 = _.findWhere(actor1Roles, {'imdbid': id});
    let a2 = _.findWhere(actor2Roles, {'imdbid': id});
    let overlapYears = _.intersection(returnYears(a1.year.split('-')), returnYears(a2.year.split('-')));
    if(overlapYears.length > 0){
      console.log(a1, a2, overlapYears);
      overlap.push([a1, overlapYears]);
      ct ++;
    } else {
      console.log(`both starred in ${a1.title}, but years did not overlap`)
      justMissed.push(a1.title);
    }
  })
  resultsPara(ct);
  resultsList(overlap, justMissed);
}

const setFilmData = () => {
  d3.select('.loader').style('display', 'none');
  console.log(actor1Data['urlPhoto'], actor2Data['urlPhoto']);
  [actor1Data, actor2Data].forEach((actorData, idx) => {
    let roleStr;
    let actorRoles = [];
    ["Actor", "Actress"].forEach(role => {
      if(actorRoles.length < 1){
        actorRoles = _.findWhere(actorData.filmographies, {section: role}) || [];
        roleStr = role;
      }
    });
    getListEmoji += roleStr;
    if(idx === 0){
      actor1Roles = actorRoles['filmography'];
    } else {
      actor2Roles = actorRoles['filmography'];
    }
  });
  console.log(actor1Roles, actor2Roles);
  compare(_.map(actor1Roles, function(item){ return item.imdbid; }), _.map(actor2Roles, function(item){ return item.imdbid; }));
}

const getActor2 = (error, actor2) => {
  console.log(actor2);
  if ('error' in actor2){
    if(actor2['error']['code'] === 213){
      d3.select('#resultsPara').html(`Unable to find "${name2}", please try again.`);
    } else {
      d3.select('#resultsPara').html(`Error loading data occurred, please try again.`);
    }
    d3.select('.loader').style('display', 'none');
  } else {
    actor2Data = actor2.data.names[0];
    sessionStorage.setItem(name2, JSON.stringify(actor2Data));
    setFilmData();
  }
}

const getActor1 = (error, actor1) => {
  console.log(actor1);
  if ('error' in actor1){
    if(actor1['error']['code'] === 213){
      d3.select('#resultsPara').html(`Unable to find "${name1}", please try again.`);
    } else {
      d3.select('#resultsPara').html(`Error loading data occurred, please try again.`);
    }
    d3.select('.loader').style('display', 'none');
  } else {
    actor1Data = actor1.data.names[0];
    sessionStorage.setItem(name1, JSON.stringify(actor1Data));
    if(sessionStorage.getItem(name2)){
      actor2Data = JSON.parse(sessionStorage.getItem(name2));
      setFilmData();
    } else {
      d3.queue()
        .defer(d3.json, `https://cors-anywhere.herokuapp.com/http://www.myapifilms.com/imdb/idIMDB?token=14b59da6-a984-4d6c-80cc-9327ae12ff06&name=${encodeURI(name2)}&format=json&filmography=1&limit=1&uniqueName=1`)
        .await(getActor2);
    }
  }
}

const submitActors = (nameA, nameB) => {
  d3.select('.loader').style('display', 'inline-block');
  d3.select('#resultsPara').html('');
  d3.select('#resultsList').attr('class', '').html('');
  d3.select('#justMissed').html('');
  showAsteriskDesc = false;
  d3.select('#asterisk').style('display', 'none');
  getListEmoji = '';
  name1 = nameA.toLowerCase();
  name2 = nameB.toLowerCase();
  console.log(name1, name2);
  if(sessionStorage.getItem(name1)){
    actor1Data = JSON.parse(sessionStorage.getItem(name1));
    if(sessionStorage.getItem(name2)){
      actor2Data = JSON.parse(sessionStorage.getItem(name2));
      setFilmData();
    } else {
      d3.queue()
        .defer(d3.json, `https://cors-anywhere.herokuapp.com/http://www.myapifilms.com/imdb/idIMDB?token=14b59da6-a984-4d6c-80cc-9327ae12ff06&name=${encodeURI(name2)}&format=json&filmography=1&limit=1&uniqueName=1`)
        .await(getActor2);
    }
  } else {
    d3.queue()
      .defer(d3.json, `https://cors-anywhere.herokuapp.com/http://www.myapifilms.com/imdb/idIMDB?token=14b59da6-a984-4d6c-80cc-9327ae12ff06&name=${encodeURI(name1)}&format=json&filmography=1&limit=1&uniqueName=1`)
      .await(getActor1);
  }
}

const setOriginal = () => {
  sessionStorage.setItem(name1, JSON.stringify(actor1Data));
  sessionStorage.setItem(name2, JSON.stringify(actor2Data));
  setFilmData();
}

d3.select('#findActors').on('submit', d => {
  d3.event.preventDefault();
  // console.log('submitted', d, d3.event)
  let act1 = d3.select('#actor1').property('value');
  let act2 = d3.select('#actor2').property('value');
  window.location.hash = `#${encodeURI(act1)}+${encodeURI(act2)}`;
  submitActors(act1, act2);
});

d3.selectAll('input.acting').on('focus', (d, i, nodes) => {
  if(d3.select(nodes[i]).property('value').length > 0){
    d3.select(nodes[i].parentNode).classed('show-ex', true);
  }
});

d3.selectAll('input.acting').on('keyup', (d, i, nodes) => {
  if(d3.select(nodes[i]).property('value').length > 0){
    d3.select(nodes[i].parentNode).classed('show-ex', true);
  } else {
    d3.select(nodes[i].parentNode).classed('show-ex', false);
  }
});

d3.selectAll('.del').on('click', (d, i, nodes) => {
  d3.select(nodes[i].parentNode).select('input').property('value', '');
  d3.select(nodes[i].parentNode).classed('show-ex', false);
});

if(window.location.hash.length > 1){
  let actorArray = window.location.hash.replace('#', '').split('+');
  d3.select('#actor1').property('value', decodeURI(actorArray[0]));
  d3.select('#actor2').property('value', decodeURI(actorArray[1]));
  submitActors(decodeURI(actorArray[0]), decodeURI(actorArray[1]));
} else {
  d3.select('#actor1').property('value', 'Jessica Lange');
  d3.select('#actor2').property('value', 'Sarah Paulson');
  getListEmoji = '';
  setOriginal();
}
