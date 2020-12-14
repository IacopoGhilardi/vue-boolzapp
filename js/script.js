// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato
// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// Milestone 5 - opzionale
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 


document.addEventListener('DOMContentLoaded', () => {


    const app = new Vue({

        el: '#container',
        data:{
			userInput: "",
			search: "",
			contactIndex: 0,
            contacts: [
            	{
            		name: 'Uomo pipistrello',
            		avatar: 'img/batman-icon.png',
            		visible: false,
                    isActive: "",
            		messages: [
            			{
							visibility: "hidden",
            				date: '10/01/2020 15:30:55',
            				text: 'Sei uscito oggi?',
            				status: 'sent'
            			},
            			{
							visibility: "hidden",
            				date: '10/01/2020 15:50:00',
            				text: 'Un po\' di luce ti farebbe bene',
            				status: 'sent'
            			},
            			{
							visibility: "hidden",
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
							visibility: "hidden",
            				date: '20/03/2020 16:30:00',
            				text: 'Ciao come stai?',
            				status: 'sent'
            			},
            			{
							visibility: "hidden",
            				date: '20/03/2020 16:30:55',
            				text: 'Bene grazie! Stasera ci vediamo?',
            				status: 'received'
            			},
            			{
							visibility: "hidden",
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
							visibility: "hidden",
            				date: '28/03/2020 10:10:40',
            				text: 'La Marianna va in campagna',
            				status: 'received'
            			},
            			{
							visibility: "hidden",
            				date: '28/03/2020 10:20:10',
            				text: 'Sicuro di non aver sbagliato chat?',
            				status: 'sent'
            			},
            			{
							visibility: "hidden",
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
							visibility: "hidden",
            				date: '10/01/2020 15:30:55',
            				text: 'Sei il migliore di tutti',
            				status: 'sent'
            			},
            			{
							visibility: "hidden",
            				date: '10/01/2020 15:50:00',
							text: 'Si, lo so',
            				status: 'received'
            			}
            		],
            	},
            ],

		},
		computed: {
			filteredContacts() {
				return this.contacts.filter(contact => {
				  return contact.name.toLowerCase().includes(this.search.toLowerCase())
				})
			}
		},
        methods: {
            changeContact(index){
				this.contactIndex = index;
			},
			reciveMessage() {
					setTimeout(() => {
						this.contacts[this.contactIndex].messages.push(
							{
								visibility: "hidden",
								date: dayjs().format("DD-MM-YYYY HH:mm:ss"),
								text: 'Ok',
								status: 'received'
							});
					}, 1000);
			},
			sendMessage() {
				if (this.userInput != ""){ 
					this.contacts[this.contactIndex].messages.push(
						{
							visibility: "hidden",
							date: dayjs().format("DD-MM-YYYY HH:mm:ss"),
							text: this.userInput,
							status: 'sent'
						});
					this.userInput = '';
					this.reciveMessage();
				}
			},
			toggleMessageMenu(message) {
				message.visibility = message.visibility == "hidden" ? "show" : "hidden";
			},
			deleteMessage(index) {
				Vue.delete(this.contacts[this.contactIndex].messages, index);
			},
			checkLengthMessages() {
				return this.contacts[this.contactIndex].messages.length > 0;
			}
        }
          
    });

});
