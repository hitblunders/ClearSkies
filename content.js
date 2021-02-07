const cnsr = ["fucking","Arse ","Damn ","Bloody","Crap","Fuck off","Munter","Minger ","Bint ","Pissed","Shit ","Jesus Christ ","Bitch ","Bollocks","Son of a bitch ","Bellend","Tit ","Fanny ","Snatch ","Clunge","Gash ","Prick ","Twat ","Pussy ","Cock","Pinage ","Dickhead","Dick ","Bastard ","Fuck ","Wanker","Motherfucker","Cunt ","Gash","Prick ","Twat","Knob ","Bloody Hell ","Choad ","Crikey","Rubbish ","Shag ","Root","Bloody Oath ","Get Stuffed ","Bum ","Bogeyman ","Brain-fart ","Brainy ","Butthead ","Bum-fucker","Brainless","Asshole ","Cheater ","Chaot ","Cockboy","Cockmaster ","Creep","Cockfucker ","CuntSucker","Criminal ","Cockboy","Cockup","Deathlord","Devil","Dickhead","Dumbo","Dufus ","Dogshit","Dulles","Dumpy","Donkey","Fatso ","Fellow","Fibber ","Freak ","Frog","Fuck face","Fuck head ","Fixer","Gangster ","Grouch ","Grumpy","Hooligan","Jerk ","Joker","Jack-Ass","Killer","Liar ","Lumpy ","Luzifer ","Monster ","Mutant ","Minx ","Nurd ","Numb","Oddball","Outlaw","Oildick ","Oger","Pig","Pornofreak ","Prolet","Queer","Rat ","Reject ","Ripper"]

//cnsr.forEach(element => console.log(element));

var text = document.getElementsByTagName("*");
//var cnsr = ["the", "parable", "to"];


for (var i = 0; i < text.length; i++){
    
    var paragraph = text[i].innerHTML;
    var words = paragraph.split(" ");
    
    for (var j = 0; j < words.length; j++){
        var word = words[j];
        
        for (var k = 0; k < cnsr.length; k++){
        	if (word == cnsr[k]){
            	text[i].innerHTML = text[i].innerHTML.replace(" " + cnsr[k] + " ", ' ***** ')
        	}
        }
    }
    
}

