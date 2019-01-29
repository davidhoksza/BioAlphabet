# BioAlphabet 

BioAlphabet is a simple service for conversion of a given text into a set of pictures 
representing letters constituting the input text in given domain. 

BioAlphabet allows you to convert an arbitrary text which is then rendered in the 
alphabet of your choice. In the settings, you have the option to select
size of the letters and also whether you want wrap the text to fit in the 
window. The resulting image can then be exported to a PNG file. 
The output will look exactly the same as it shows in your web browsers, 
including the line breaks.

Follows a lists of currently supported alphabets and alphabets which I intend
to add. Should you know about any other relevant alphabet, please [let me know](mailto:david.hoksza@gmail.com).

## Currently supported alphabets

- [Protein alphabet](http://www.bioch.ox.ac.uk/howarth/alphabet.htm)
    - Alphabet consisting of protein 3D structures comming from [PDB](https://www.ebi.ac.uk/pdbe/) created by
    Mark Howarth. To produce the image files used in BioAlphabet, I used the PyMOL *pse* files which 
    can be downloaded from Mark Horwath's page and used a PyMOL script (available in the scripts directory)
    to convert those into images. 
    
    
## To be added (hopfully soon)

- [Neutrophil alphabet](http://www.bloodjournal.org/content/121/18/3546?sso-checked=true)
- [Butterfly alphabet](http://www.butterflyalphabet.com/names/index.php)