import moment from 'moment-timezone';

let handler = async (m, { conn, args }) => {
  let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  let user = global.db.data.users[userId];
  let name = conn.getName(userId);
  let cumpleanos = user.birth || 'No especificado';
  let genero = user.genre || 'No especificado';
  let exp = user.exp || 0;
  let nivel = user.level || 0;
  let coins = user.coin || 0;
  let role = user.role || 'Esclavo';

  let perfil = await conn.profilePictureUrl(userId, 'image').catch(_ => 'https://files.catbox.moe/xr2m6u.jpg');

  let txt = `
𝐇𝐨𝐥𝐚! 𝐒𝐨𝐲 ${botname}
ᴀǫᴜɪ ᴛɪᴇɴᴇs ʟᴀ ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs
╭┈ ↷
│ᰔᩚ Cliente » @${userId.split('@')[0]}
│⛁ ${moneda} » ${coins}
│✰ Experiencia » ${exp.toLocaleString()}
│✦ Nivel » ${nivel}
│✤ Rango » ${role}
│🜲 Propietario legend ⁩
╰─────────────────
🌟 ᴄʀᴇᴀ ᴜɴ sᴜʙ-ʙᴏᴛ ᴄᴏɴ ᴛᴜ ɴᴜᴍᴇʀᴏ 🔢🤖 ᴜᴛɪʟɪᴢᴀɴᴅᴏ *#serbot* o *#serbot code* 🛠️💫



»  ⊹˚• Info-Bot •˚⊹

✎ Comandos para ver estado e información de la Bot 🤖💬  
ꨄ︎ *#help • #menu*  
→ 📜🛠️ Ver la lista de comandos de la Bot. ¡Todo lo que necesitas saber!  
ꨄ︎ *#uptime • #runtime*  
→ ⏳💻 Ver tiempo activo o en línea de la Bot. ¡Siempre disponible!  
ꨄ︎ *#serbot • #serbot code*  
→ 🛠️🤖 Crea una sesión de Sub-Bot. ¡Multiplica tus asistentes!  
ꨄ︎ *#bots • #sockets*  
→ 🔗🤖 Ver la lista de Sub-Bots activos. ¡Conoce a tu equipo!  
ꨄ︎ *#creador*  
→ 👤✉️ Ver el número oficial del creador de la Bot. ¡Conoce al genio detrás!  
ꨄ︎ *#status • #estado*  
→ 📊⚙️ Ver el estado actual de la Bot. ¡Todo en orden!  
ꨄ︎ *#links • #grupos*  
→ 🌐🔗 Ver los enlaces oficiales de la Bot. ¡Conéctate con nosotros!  
ꨄ︎ *#infobot • #infobot*  
→ ℹ️🔍 Ver la información completa de la Bot. ¡Todo lo que necesitas saber!  
ꨄ︎ *#sug • #newcommand*  
→ 💡📝 Sugiere un nuevo comando. ¡Tu idea podría ser la próxima!  
ꨄ︎ *#solicitud • #sugerencia*  
→ 📬💭 Envía una sugerencia al canal de la Bot. ¡Queremos escuchar tus ideas!  
ꨄ︎ *#p • #ping*  
→ ⚡📶 Ver la velocidad de respuesta del Bot. ¡Rápido como un rayo!  
ꨄ︎ *#reporte • #reportar*  
→ 🚨🛠️ Reporta alguna falla o problema de la Bot. ¡Ayúdanos a mejorar!  
ꨄ︎ *#sistema • #system*  
→ 🖥️🔧 Ver estado del sistema de alojamiento. ¡Todo funcionando bien!  
ꨄ︎ *#speed • #speedtest*  
→ 🚀📈 Ver las estadísticas de velocidad de la Bot. ¡Velocidad máxima!  
ꨄ︎ *#views • #usuarios*  
→ 👥📊 Ver la cantidad de usuarios registrados en el sistema. ¡Una gran comunidad!  
ꨄ︎ *#funciones • #totalfunciones*  
→ ✔️📋 Ver todas las funciones de la Bot. ¡Descubre todo su potencial!  
ꨄ︎ *#ds • #fixmsgespera*   
→ 🗑️🚫 Eliminar archivos de sesión innecesarios. ¡Limpieza en el sistema!   
ꨄ︎ *#infoanime*   
→ 🍥📚 Buscador de información sobre anime/manga. ¡Sumérgete en tus historias favoritas!

»  ⊹˚• Buscadores •˚⊹

✎ Comandos para realizar búsquedas en distintas plataformas 🔍✨  
ꨄ *#tiktoksearch • #tiktoks*  
→ 🎥🔎 ¡Buscador de videos de TikTok! Encuentra lo más viral.  
ꨄ *#ytsearch • #yts*  
→ 📺🔍 Realiza búsquedas de YouTube. ¡Descubre nuevos videos y música!  
ꨄ *#google*  
→ 🌐🔎 Realiza búsquedas por Google. ¡La información está a un clic!  
ꨄ *#pin • #pinterest*  
→ 📌🖼️ Buscador de imágenes de Pinterest. ¡Inspírate con ideas creativas!  
ꨄ *#imagen • #image*  
→ 🖼️🌍 Buscador de imágenes de Google. ¡Encuentra lo que buscas en un instante!  
ꨄ *#animesearch • #animess*  
→ 🍥🔍 Buscador de animes de Tioanime. ¡Sumérgete en el mundo del anime!  
ꨄ *#animei • #animeinfo*  
→ 📚🎬 Buscador de capítulos de #animesearch. ¡No te pierdas ni un episodio!  
ꨄ *#infoanime*  
→ 🗒️✨ Buscador de información sobre anime/manhwa. ¡Conoce todo sobre tus historias favoritas!

»  ˚• Descargas •˚⊹

✎ Comandos de descargas para varios archivos 📥✨  
ꨄ︎ *#tiktok • #tt*  
→ 🎵📹 ¡Descarga videos de TikTok y comparte la diversión!  
ꨄ︎ *#mediafire • #mf*  
→ 📂⬇️ Descargar un archivo de MediaFire. ¡Tus archivos al alcance de un clic!  
ꨄ︎ *#pinvid • #pinvideo* + [enlace]  
→ 📌🎥 Descargar vídeos de Pinterest. ¡Inspírate y guárdalos!  
ꨄ︎ *#play • #play2*  
→ 🎶📺 Descarga música/video de YouTube. ¡Lleva la fiesta contigo!  
ꨄ︎ *#fb • #facebook*  
→ 📱🎬 Descarga videos de Facebook. ¡No te pierdas esos momentos!  
ꨄ︎ *#ig • #instagram*  
→ 📸🌟 Descarga contenido de Instagram. ¡Guarda tus recuerdos favoritos!  
ꨄ︎ *#tts • #tiktoks* + [búsqueda]  
→ 🔍🎉 Buscar videos de TikTok. ¡Encuentra lo más trending!  
ꨄ︎ *#ttimg • #ttmp3* + <url>  
→ 🖼️🎧 Descarga fotos/audios de TikTok. ¡Todo lo que amas en un solo lugar!  
ꨄ︎ *#apk • #modapk*  
→ 📲⚙️ Descarga un apk de Aptoide. ¡Explora nuevas apps!  
→ 🛠️📦 Descarga paquetes de NPMJs. ¡Desarrolla como un pro!  
ꨄ︎ *#animelinks • #animedl*  
→ 🍥📥 Descarga Links disponibles para anime. ¡No te pierdas ningún episodio!

>> `GACHA` <<
ꨄ︎ *#rollwaifu • #rw • #roll*  
→ 🎉💖 ¡Waifu o husbando aleatorio! ¡La suerte está de tu lado!  
ꨄ︎ *#claim • #c • #reclamar*  
→ 🏆🎭 Reclama un personaje y amplía tu colección. ¡Hazlo tuyo!  
ꨄ︎ *#harem • #waifus • #claims*  
→ 📜👫 Ver tus personajes reclamados. ¡Mira cuántos has conseguido!  
ꨄ︎ *#charimage • #waifuimage • #wimage*  
→ 🖼️🌟 Ver una imagen aleatoria de un personaje. ¡Sorpresa visual!  
ꨄ︎ *#charinfo • #winfo • #waifuinfo*  
→ 📚🔍 Ver información detallada de un personaje. ¡Conócelos mejor!  
ꨄ︎ *#givechar • #givewaifu • #regalar*  
→ 🎁💌 Regala un personaje a otro usuario. ¡Haz felices a tus amigos!  
ꨄ︎ *#vote • #votar*  
→ 🗳️🔥 Vota por un personaje para subir su valor. ¡Tu opinión cuenta!  
ꨄ︎ *#waifusboard • #waifustop • #topwaifus*  
→ 🥇📊 Ver el top de personajes con mayor valor. ¡Descubre quién manda!

»  ⊹˚• Stickers •˚⊹

✎ Comandos para creaciones de stickers y más 🎨✨  
ꨄ︎ *#sticker • #s*  
→ 🖼️✂️ Crea stickers de (imagen/video). ¡Dale vida a tus creaciones!  
ꨄ︎ *#pfp • #getpic*  
→ 👤📸 Obtén la foto de perfil de un usuario. ¡Conéctate visualmente!  
ꨄ︎ *#qc*  
→ ✏️🖼️ Crea stickers con texto o de un usuario. ¡Personaliza a tu manera!  
ꨄ︎ *#toimg • #img*  
→ 📷➡️🖼️ Convierte stickers en imagen. ¡Haz que todo se vea genial!  
ꨄ︎ *#brat*  
→ 📝🎉 Crea stickers con texto. ¡Exprésate y diviértete!  
ꨄ︎ *#emojimix*  
→ 🍀🔗 Fusión de 2 emojis para crear un sticker único. ¡Innovación emoji!  
ꨄ︎ *#wm*  
→ ✏️🔄 Cambia el nombre de stickers. ¡Dales tu toque personal!

»  ⊹˚• Herramientas •˚⊹

✎ Comandos de herramientas con muchas funciones 🛠️✨  
ꨄ︎ *#fake • #fakereply*  
→ 🤖💬 Crea un mensaje falso de un usuario.  
ꨄ︎ *#enhance • #remini • #hd*  
→ 🌟🖼️ Mejora la calidad de una imagen. ¡Hazla brillar!  
ꨄ︎ *#read • #readviewonce • #ver*  
→ 👁️📸 Ver imágenes de una sola vista. ¡Sorpresa!  
ꨄ︎ *#whatmusic • #shazam*  
→ 🎶🔍 Descubre el nombre de canciones o vídeos que te encantan.  
ꨄ︎ *#spamwa • #spam*  
→ 🚫📩 Envía spam a un usuario (¡mejor hazlo con cuidado!).  
ꨄ︎ *#length • #tamaño*  
→ 📏🖼️ Cambia el tamaño de imágenes y vídeos, ¡ajusta a tu gusto!  
ꨄ︎ *#say • #decir* + [texto]  
→ 🗣️💬 Repite un mensaje con estilo. ¡Dilo en voz alta!  
ꨄ︎ *#translate • #traducir • #trad*  
→ 🌍🔤 Traduce palabras en otros idiomas y conecta con el mundo.


»  ⊹˚• Perfil •˚
✎ Comandos de perfil para ver, configurar y comprobar estados de tu perfil 🌟👤  
ꨄ︎ *#reg • #verificar • #register*  
→ 📝✨ Registra tu nombre y edad en el bot.  
ꨄ︎ *#unreg*  
→ ❌🗑️ Elimina tu registro del bot.  
ꨄ︎ *#profile*  
→ 👤📜 Muestra tu perfil de usuario.  
ꨄ︎ *#marry* [mención / etiquetar]  
→ 💍❤️ Propón matrimonio a otro usuario.  
ꨄ︎ *#divorce*  
→ 💔🚪 Divorciarte de tu pareja.  
ꨄ︎ *#setgenre • #setgenero*  
→ 🌈🔧 Establece tu género en el perfil del bot.  
ꨄ︎ *#delgenre • #delgenero*  
→ ❌🧑‍🤝‍🧑 Elimina tu género del perfil del bot.  
ꨄ︎ *#setbirth • #setnacimiento*  
→ 🎂📅 Establece tu fecha de nacimiento en el perfil del bot.  
ꨄ︎ *#delbirth • #delnacimiento*  
→ ❌🎉 Elimina tu fecha de nacimiento del perfil del bot.  
ꨄ︎ *#setdescription • #setdesc*  
→ ✏️💬 Establece una descripción en tu perfil del bot.  
ꨄ︎ *#deldescription • #deldesc*  
→ ❌📝 Elimina la descripción de tu perfil del bot.  
ꨄ︎ *#lb • #lboard* + <Paginá>  
→ 🏆📊 Top de usuarios con más (experiencia, dragones y nivel).  
ꨄ︎ *#level • #lvl* + <@Mencion>  
→ 📈🌟 Ver tu nivel y experiencia actual.   
ꨄ︎ *#comprarpremium • #premium*   
→ 💳🌟 Compra un pase premium para usar el bot sin límites.   
ꨄ︎ *#confesiones • #confesar*   
→ 💌🤫 Confiesa tus sentimientos a alguien de manera anónima.


»  ⊹˚• Grupo •˚⊹

✎ Comandos de grupos para una mejor gestión de ellos 🌟🤖  
ꨄ︎ *#config • #on*  
→ ⚙️🔍 Ver opciones de configuración de grupos.  
ꨄ︎ *#hidetag*  
→ 📣👥 ¡Mención a todos! Envía un mensaje a todos los usuarios.  
ꨄ︎ *#gp • #infogrupo*  
→ 📜ℹ️ Ver la información del grupo.  
ꨄ︎ *#linea • #listonline*  
→ 👤💻 Ver la lista de los usuarios en línea.  
ꨄ︎ *#link*  
→ 🔗🤖 El bot envía el link del grupo.  
ꨄ︎ *#admins • #admin*  
→ 👑📞 Mencionar a los admins para solicitar ayuda.  
ꨄ︎ *#restablecer • #revoke*  
→ 🔄🔗 Restablecer el enlace del grupo.  
ꨄ︎ *#grupo • #group* [open / abrir]  
→ 🚪📬 Cambia ajustes del grupo para que todos envíen mensajes.  
ꨄ︎ *#grupo • #group* [close / cerrar]  
→ 🔒🚫 Cambia ajustes del grupo para que solo los administradores envíen mensajes.  
ꨄ︎ *#kick* [número / mención]  
→ ❌👋 Elimina un usuario del grupo.  
ꨄ︎ *#add • #añadir • #agregar* [número]  
→ ➕🤝 Invita a un usuario a tu grupo.  
ꨄ︎ *#promote* [mención / etiquetar]  
→ 🌟👮‍♂️ El bot dará administrador al usuario mencionado.  
ꨄ︎ *#demote* [mención / etiquetar]  
→ 🔻👮‍♀️ El bot quitará administrador al usuario mencionado.  
ꨄ︎ *#gpbanner • #groupimg*  
→ 🖼️✨ Cambiar la imagen del grupo.  
ꨄ︎ *#gpname • #groupname*  
→ 📝🔤 Cambiar el nombre del grupo.  
ꨄ︎ *#advertir • #warn • #warning*  
→ ⚠️👁️ Darle una advertencia a un usuario.  
ꨄ︎ *#unwarn • #delwarn*  
→ ❌⚠️ Quitar advertencias.  
ꨄ︎ *#banchat*  
→ 🚫🤖 Banear el Bot en un chat o grupo.   
ꨄ︎ *#unbanchat*   
→ ✅🤖 Desbanear el Bot del chat o grupo.   
ꨄ︎ *#mute* [mención / etiquetar]   
→ 🔕🙊 El bot elimina los mensajes del usuario.   
ꨄ︎ *#unmute* [mención / etiquetar]   
→ 🔊😊 El bot deja de eliminar los mensajes del usuario.   
ꨄ︎ *#delete • #del*   
→ 🗑️✂️ Elimina mensajes de otros usuarios.   
ꨄ︎ *#fantasmas*   
→ 👻📋 Ver lista de inactivos del grupo.   
ꨄ︎ *#kickfantasmas*   
→ ❌👻 Elimina a los inactivos del grupo.   
ꨄ︎ *#invocar • #tagall • #todos*   
→ 📢👥 Invoca a todos los usuarios de un grupo.   
ꨄ︎ *#setemoji • #setemo*   
→ 🎉😊 Cambia el emoji que se usa en la invitación de usuarios.   
ꨄ︎ *#listnum • #kicknum*   
→ 🌍➖ Elimina a usuario por el prefijo de país.


»  ⊹˚• Anime •˚
ꨄ︎ *#angry • #enojado* + <mencion>  
→ 😡🔥 ¡Estás enojado! La ira se desata.  
ꨄ︎ *#dance* + <mencion>  
→ 💃🕺 ¡Es hora de mover el cuerpo! Saca tus mejores pasos.  
ꨄ︎ *#impregnate • #preg* + <mencion>  
→ 🤰💖 ¡Sorpresa! Embarazar a alguien (con amor, por supuesto).  
ꨄ︎ *#kill* + <mencion>  
→ 🔫💀 ¡Cuidado! Toma tu arma y mata a alguien (en el juego, claro).  
ꨄ︎ *#kiss • #besar* • #kiss2 + <mencion>  
→ 😘💋 ¡Dale un beso! El amor está en el aire.  
ꨄ︎ *#lick* + <mencion>  
→ 👅💦 ¡Lamer a alguien! Un gesto juguetón.  
ꨄ︎ *#slap* + <mencion>  
→ 👋😠 ¡Bofetada rápida! A veces hay que poner límites.  
ꨄ︎ *#smoke* + <mencion>  
→ 🚬💨 ¡Tiempo de relajarse! Fuma con estilo.



»  ⊹˚• NSFW •˚⊹

✎ Comandos NSFW (Contenido para adultos 🔥🍑)
ꨄ︎ *#anal* + <mencion>  
→ 💥 ¡Prepárate para una experiencia intensa! Hacer un anal.  
ꨄ︎ *#waifu*  
→ 💖 ¡Descubre tu waifu perfecta! Busca una aleatoria.  
ꨄ︎ *#bath* + <mencion>  
→ 🛁 ¡Es hora de relajarse! Bañarse y disfrutar.  
ꨄ︎ *#cum* + <mencion>  
→ 💦 ¡Momento explosivo! Venirse en alguien.  
ꨄ︎ *#fuck • #coger • #fuck2* + <mencion>  
→ 😏 ¡Aventuras apasionadas! Follarte a alguien.  
ꨄ︎ *#violar • #perra* + <mencion>  
→ 🚫⚠️ ¡Cuidado! Acto extremo: Viola a alguien (usa con responsabilidad).  
ꨄ︎ *#rule34 • #r34* + [Tags]  
→ 📸 ¡Explora el lado picante! Buscar imágenes H.  
ꨄ︎ *#undress • #encuerar* + <mencion>  
→ 👗✨ ¡Desnudando sorpresas! Desnudar a alguien.
  `.trim();

  await conn.sendMessage(m.chat, { 
      text: txt,
      contextInfo: {
          mentionedJid: [m.sender, userId],
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: channelRD.id,
              newsletterName: channelRD.name,
              serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
              title: botname,
              body: textbot,
              thumbnailUrl: banner,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true,
          },
      },
  }, { quoted: m });

};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['menu', 'menú', 'help', 'ayuda'];

export default handler;
