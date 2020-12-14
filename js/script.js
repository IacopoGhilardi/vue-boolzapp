// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato
// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

document.addEventListener('DOMContentLoaded', () => {


    const app = new Vue({

        el: '#container',
        data:{
			userInput: "",
            contactIndex: 0,
            contacts: [
            	{
            		name: 'Uomo pipistrello',
            		avatar: 'img/batman-icon.png',
            		visible: false,
                    isActive: "",
            		messages: [
            			{
            				date: '10/01/2020 15:30:55',
            				text: 'Sei uscito oggi?',
            				status: 'sent'
            			},
            			{
            				date: '10/01/2020 15:50:00',
            				text: 'Un po\' di luce ti farebbe bene',
            				status: 'sent'
            			},
            			{
            				date: '10/01/2020 16:15:22',
            				text: 'Sono Batman!',
            				status: 'received'
                        },
                        
            		],
            	},
            	{
            		name: 'Uomo con la tutina',
            		avatar: 'img/spiderman-avatar.webp',
            		visible: false,
            		messages: [
            			{
            				date: '20/03/2020 16:30:00',
            				text: 'Ciao come stai?',
            				status: 'sent'
            			},
            			{
            				date: '20/03/2020 16:30:55',
            				text: 'Bene grazie! Stasera ci vediamo?',
            				status: 'received'
            			},
            			{
            				date: '20/03/2020 16:35:00',
            				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            				status: 'sent'
            			}
            		],
            	},
            	{
            		name: 'Armored boy',
            		avatar: 'img/ironman.webp',
            		visible: false,
            		messages: [
            			{
            				date: '28/03/2020 10:10:40',
            				text: 'La Marianna va in campagna',
            				status: 'received'
            			},
            			{
            				date: '28/03/2020 10:20:10',
            				text: 'Sicuro di non aver sbagliato chat?',
            				status: 'sent'
            			},
            			{
            				date: '28/03/2020 16:15:22',
            				text: 'Ah scusa!',
            				status: 'received'
            			}
            		],
            	},
            	{
            		name: 'Me stesso',
            		avatar: 'img/deadpool.png',
            		visible: false,
            		messages: [
            			{
            				date: '10/01/2020 15:30:55',
            				text: 'Sei il migliore di tutti',
            				status: 'sent'
            			},
            			{
            				date: '10/01/2020 15:50:00',
							text: 'Si, lo so',
            				status: 'received'
            			}
            		],
            	},
            ],

		},
        methods: {
            changeContact(index){
                this.contactIndex = index;
			},
			reciveMessage() {
				setTimeout(() => {
					
					this.contacts[this.contactIndex].messages.push(
						{
							data: dayjs().format("DD-MM-YYYY HH:mm:ss"),
							text: 'Ok',
							status: 'received'
						});
						console.log(this.contacts[this.contactIndex].messages);
				}, 1000);
			},
			sendMessage() {
				this.contacts[this.contactIndex].messages.push(
					{
						data: dayjs().format("DD-MM-YYYY HH:mm:ss"),
						text: this.userInput,
						status: 'sent'
					});
				this.userInput = '';
			}
        }
          
    });

});
