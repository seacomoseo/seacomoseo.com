#!/bin/bash
cd ./SanSoul/seacomoseo.com/

# backup
cp ./data/design.yml ./data/design-backup.yml
cp ./data/menu.yml ./data/menu-backup.yml

# COPY DESIGN TO AUX
cp ./data/design.yml ./data/aux.yml

# REMOVE OPTIONS IN AUX
perl -0777 -i'' -pe 's/(.|\n)+?\nmenu:\n((.|\n)+?\n)footer:\n(.|\n)+?\ncallnow:\n((.|\n)+)/$2$5/igs' ./data/aux.yml

# UNINDENT IN AUX
perl -0777 -i'' -pe 's/(^|\n)\s\s/$1/ig' ./data/aux.yml

# ADD CALLNOW IN AUX
perl -0777 -i'' -pe 's/\n((active|buttons):\s)/\ncallnow_$1/igs' ./data/aux.yml

# ADD MENU TO AUX
cat ./data/menu.yml >> ./data/aux.yml

# REMOVE MENU
rm ./data/menu.yml

# RENAME AUX TO MENU
mv ./data/aux.yml ./data/menu.yml

# REMOVE OPTIONS IN DESIGN
perl -0777 -i'' -pe 's/menu:(.|\n)+?\n(footer:)/$2/igs' ./data/design.yml
perl -0777 -i'' -pe 's/callnow:(.|\n)+//igs' ./data/design.yml
