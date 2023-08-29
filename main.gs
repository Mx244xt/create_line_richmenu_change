const Propertie = PropertiesService.getScriptProperties();
const CHANNEL_ACCESS_TOKEN = Propertie.getProperty('CHANNEL_ACCESS_TOKEN');

function main() {
  const plans = ["A","B"];
  plans.map((plan) => {
  console.log(plan)
  createRichMenu(plan)
  });
  const RICH_MENU_ID = PropertiesService.getScriptProperties().getProperty('RICH_MENU_ID_'+plans[0]);
  setRichMenuForAllUsers(RICH_MENU_ID);
}
