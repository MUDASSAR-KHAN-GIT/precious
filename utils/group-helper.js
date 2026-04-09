async function isAdmin(sock, groupId, userJid) {
  const groupMeta = await sock.groupMetadata(groupId)
  const participant = groupMeta.participants.find(p => p.id === userJid || p.id === `${userJid}@s.whatsapp.net`)
  return participant?.admin === 'admin' || participant?.admin === 'superadmin'
}

async function isBotAdmin(sock, groupId) {
  const botNumber = sock.user.id.split(':')[0]
  return await isAdmin(sock, groupId, `${botNumber}@s.whatsapp.net`)
}

module.exports = { isAdmin, isBotAdmin }
