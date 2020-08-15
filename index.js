'use strict'
module.exports = function AutoGuildQuest(mod) {
	mod.hook('S_UPDATE_GUILD_QUEST_STATUS', 1, (event) => {
        if (event.targets[0].completed == event.targets[0].total) {
            setTimeout(()=>{
                mod.send('C_REQUEST_FINISH_GUILD_QUEST', 1, {quest: event.quest})
            }, 2000 + Math.random()*1000);
            setTimeout(() => {
                mod.send('C_REQUEST_START_GUILD_QUEST', 1, {questId: event.quest})
            }, 4000 + Math.random()*1000);
        }
    });
}