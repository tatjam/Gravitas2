// priority 10

const chestBanList = [
  "enderio:copper_alloy_ingot",
  "enderio:dark_steel_ingot",
  "enderio:dark_steel_sword",
  "enderio:energized_gear",
  "enderio:iron_gear",
  "enderio:loot_capacitor",
  "enderio:pulsating_alloy_ingot",
  "enderio:redstone_alloy_ingot",
  "enderio:stone_gear",
  "enderio:vibrant_alloy_ingot",
  "enderio:vibrant_gear",
  "enderio:wood_gear",
  "railcraft:charge_meter",
  "railcraft:creosote_bottle",
  "railcraft:goggles",
  "railcraft:iron_crowbar",
  "railcraft:iron_spike_maul",
  "railcraft:overalls",
  "railcraft:seasons_crowbar",
  "railcraft:signal_block_surveyor",
  "railcraft:signal_tuner",
  "railcraft:steam_locomotive",
  "railcraft:steel_axe",
  "railcraft:steel_boots",
  "railcraft:steel_chestplate",
  "railcraft:steel_helmet",
  "railcraft:steel_leggings",
  "railcraft:steel_pickaxe",
  "railcraft:steel_sword",
  "railcraft:tank_minecart",
  "sgjourney:jaffa_boots",
  "sgjourney:jaffa_chestplate",
  "sgjourney:jaffa_helmet",
  "sgjourney:jaffa_leggings",
  "sgjourney:naquadah_alloy",
  "sgjourney:raw_naquadah",
  "minecraft:bow",
  "minecraft:campfire",
  "minecraft:compass",
  "minecraft:copper_ingot",
  "minecraft:cornflower",
  "minecraft:crossbow",
  "minecraft:anvil",
  "minecraft:fishing_rod",
  "minecraft:flower_pot",
  "minecraft:furnace",
  "minecraft:furnace_minecart",
  "minecraft:netherite_hoe",
  "minecraft:netherite_ingot",
  "minecraft:powder_snow_bucket",
  "minecraft:soul_torch",
  "minecraft:enchanting_table",
  "railcraft:steel_plate"
]

const chestReplacementMap = {
  "minecraft:allium": "tfc:plant/allium",
  "minecraft:apple": "tfc:food/red_apple",
  "minecraft:baked_potato": "tfc:food/potato",
  "minecraft:barrel": "tfc:wood/chest/chestnut",
  "minecraft:beef": "tfc:food/beef",
  "minecraft:beetroot": "tfc:food/beet",
  "minecraft:beetroot_seeds": "tfc:seeds/beet",
  "minecraft:beetroot_soup": "tfc:food/beet",
  "minecraft:blue_orchid": "tfc:plant/blue_orchid",
  "minecraft:bread": "tfc:food/wheat_bread",
  "minecraft:bucket": "tfc:powder/salt",
  "minecraft:bundle": "tfc:stick_bundle",
  "minecraft:cake": "tfc:cake",
  "minecraft:carrot": "tfc:food/carrot",
  "minecraft:cherry_sapling": "tfc:plant/cherry_sapling",
  "minecraft:chest_minecart": "tfc:wood/chest_minecart/oak",
  "minecraft:cocoa_beans": "tfc:powder/flux",
  "minecraft:cod": "tfc:food/cod",
  "minecraft:cooked_cod": "tfc:food/cooked_cod",
  "minecraft:cooked_porkchop": "tfc:food/cooked_pork",
  "minecraft:cooked_rabbit": "tfc:food/cooked_rabbit",
  "minecraft:cooked_salmon": "tfc:food/cooked_salmon",
  "minecraft:birch_log": "tfc:wood/log/birch",
  "minecraft:birch_sapling": "tfc:wood/sapling/birch",
  "minecraft:acacia_log": "tfc:wood/log/acacia",
  "minecraft:acacia_sapling": "tfc:wood/sapling/acacia",
  "minecraft:dark_oak_boat": "tfc:wood/boat/hickory",
  "minecraft:dark_oak_log": "tfc:wood/log/hickory",
  "minecraft:dark_oak_sapling": "tfc:wood/sapling/hickory",
  "minecraft:dandelion": "tfc:plant/dandelion",
  "minecraft:dead_bush": "tfc:plant/dead_bush",
  "minecraft:deepslate_copper_ore": "tfc:ore/rich_malachite",
  "minecraft:deepslate_redstone_ore": "tfc:ore/cinnabar",
  "minecraft:diamond_axe": "tfc:ore/diamond",
  "minecraft:diamond_boots": "tfc:ore/diamond",
  "minecraft:diamond_chestplate": "tfc:ore/diamond",
  "minecraft:diamond_helmet": "tfc:ore/diamond",
  "minecraft:diamond_hoe": "tfc:ore/diamond",
  "minecraft:diamond": "tfc:ore/diamond",
  "minecraft:diamond_horse_armor": "minecraft:leather_horse_armor",
  "minecraft:diamond_leggings": "tfc:ore/diamond",
  "minecraft:diamond_pickaxe": "tfc:ore/diamond",
  "minecraft:diamond_shovel": "tfc:ore/diamond",
  "minecraft:diamond_sword": "tfc:ore/diamond",
  "minecraft:dried_kelp": "tfc:food/dried_kelp",
  "minecraft:emerald": "tfc:gem/emerald",
  "minecraft:emerald_block": "tfc:gem/emerald",
  "minecraft:fern": "tfc:plant/tree_fern",
  "minecraft:glass_bottle": "tfc:silica_glass_batch",
  "minecraft:golden_carrot": "tfc:seeds/carrot",
  "minecraft:golden_axe": "tfc:metal/ingot/gold",
  "minecraft:golden_boots": "tfc:metal/ingot/gold",
  "minecraft:golden_chestplate": "tfc:metal/ingot/gold",
  "minecraft:golden_helmet": "tfc:metal/ingot/gold",
  "minecraft:golden_hoe": "tfc:metal/ingot/gold",
  "minecraft:golden_horse_armor": "minecraft:leather_horse_armor",
  "minecraft:golden_leggings": "tfc:metal/ingot/gold",
  "minecraft:golden_pickaxe": "tfc:metal/ingot/gold",
  "minecraft:golden_shovel": "tfc:metal/ingot/gold",
  "minecraft:golden_sword": "tfc:metal/ingot/gold",
  "minecraft:gold_ingot": "tfc:metal/ingot/gold",
  "minecraft:gold_ore": "tfc:ore/rich_native_gold",
  "minecraft:iron_axe": "tfc:metal/ingot/wrought_iron",
  "minecraft:iron_bars": "tfc:metal/bars/wrought_iron",
  "minecraft:iron_block": "tfc:metal/ingot/wrought_iron",
  "minecraft:iron_boots": "tfc:metal/ingot/wrought_iron",
  "minecraft:iron_chestplate": "tfc:metal/ingot/wrought_iron",
  "minecraft:iron_helmet": "tfc:metal/ingot/wrought_iron",
  "minecraft:iron_hoe": "tfc:metal/ingot/wrought_iron",
  "minecraft:iron_horse_armor": "minecraft:leather_horse_armor",
  "minecraft:iron_ingot": "tfc:metal/ingot/wrought_iron",
  "minecraft:iron_leggings": "tfc:metal/ingot/wrought_iron",
  "minecraft:iron_ore": "tfc:ore/rich_hematite",
  "minecraft:iron_pickaxe": "tfc:metal/ingot/wrought_iron",
  "minecraft:iron_shovel": "tfc:metal/ingot/wrought_iron",
  "minecraft:iron_sword": "tfc:metal/ingot/wrought_iron",
  "minecraft:jungle_log": "tfc:wood/log/palm",
  "minecraft:jungle_sapling": "tfc:wood/sapling/palm",
  "minecraft:kelp": "tfc:plant/leafy_kelp",
  "minecraft:lapis_block": "tfc:gem/lapis_lazuli",
  "minecraft:lapis_lazuli": "tfc:ore/lapis_lazuli",
  "minecraft:lava_bucket": "tfc:rock/magma/basalt",
  "minecraft:lilac": "tfc:plant/lilac",
  "minecraft:lily_of_the_valley": "tfc:plant/lily_of_the_valley",
  "minecraft:lily_pad": "tfc:plant/water_lily",
  "minecraft:mangrove_log": "tfc:wood/log/mangrove",
  "minecraft:mangrove_propagule": "tfc:wood/sapling/mangrove",
  "minecraft:melon": "tfc:melon",
  "minecraft:melon_seeds": "tfc:seeds/melon",
  "minecraft:melon_slice": "tfc:seeds/melon",
  "minecraft:mud_bricks": "tfc:mud_brick/loam",
  "minecraft:mushroom_stew": "tfc:food/potato",
  "minecraft:mutton": "tfc:food/mutton",
  "minecraft:oak_boat": "tfc:wood/boat/oak",
  "minecraft:oak_chest_boat": "tfc:wood/boat/oak",
  "minecraft:oak_log": "tfc:wood/log/oak",
  "minecraft:oak_planks": "tfc:wood/planks/oak",
  "minecraft:oak_sapling": "tfc:wood/sapling/oak",
  "minecraft:orange_tulip": "tfc:plant/tulip_orange",
  "minecraft:oxeye_daisy": "tfc:plant/oxeye_daisy",
  "minecraft:pink_tulip": "tfc:plant/tulip_pink",
  "minecraft:poisonous_potato": "tfc:food/potato",
  "minecraft:poppy": "tfc:plant/poppy",
  "minecraft:porkchop": "tfc:food/pork",
  "minecraft:potato": "tfc:food/potato",
  "minecraft:pumpkin": "tfc:pumpkin",
  "minecraft:pumpkin_seeds": "tfc:seeds/pumpkin",
  "minecraft:rabbit": "tfc:food/rabbit",
  "minecraft:raw_copper": "tfc:ore/rich_native_copper",
  "minecraft:raw_copper_block": "tfc:metal/ingot/copper",
  "minecraft:raw_gold": "tfc:ore/rich_native_gold",
  "minecraft:raw_iron": "tfc:ore/rich_hematite",
  "minecraft:red_tulip": "tfc:plant/tulip_red",
  "minecraft:rose_bush": "tfc:plant/rose",
  "minecraft:salmon": "tfc:food/salmon",
  "minecraft:shears": "tfc:wool_cloth",
  "minecraft:spruce_log": "tfc:wood/log/spruce",
  "minecraft:spruce_sapling": "tfc:wood/sapling/spruce",
  "minecraft:spruce_sign": "tfc:wood/sign/spruce",
  "minecraft:stone_axe": "tfc:stone/axe/igneous_extrusive",
  "minecraft:stone_hoe": "tfc:stone/hoe/igneous_extrusive",
  "minecraft:stone_pickaxe": "tfc:stone/hammer/igneous_extrusive",
  "minecraft:stone_shovel": "tfc:stone/shovel/igneous_extrusive",
  "minecraft:stone_sword": "tfc:stone/javelin/igneous_extrusive",
  "minecraft:sugar_cane": "tfc:seeds/sugarcane",
  "minecraft:suspicious_stew": "tfc:food/green_bean",
  "minecraft:sweet_berries": "tfc:food/strawberry",
  "minecraft:torch": "tfc:torch",
  "minecraft:water_bucket": "tfc:wooden_bucket",
  "minecraft:wheat": "tfc:food/wheat",
  "minecraft:wheat_seeds": "tfc:seeds/wheat",
  "minecraft:white_tulip": "tfc:plant/tulip_white",
  "minecraft:wooden_axe": "tfc:stone/axe/sedimentary",
  "minecraft:wooden_pickaxe": "tfc:stone/hammer/sedimentary",
  "minecraft:chiseled_red_sandstone": "tfc:cut_sandstone/red",
}

let modifyAndRemoveChestLoot = (/** @type {Internal.LootModificationEventJS} */ event) => {
  event
    .addLootTypeModifier([LootType.CHEST, LootType.UNKNOWN])
    .anyDimension(["minecraft:overworld", "minecraft:the_nether"])
    .removeLoot(Ingredient.of(chestBanList))
  event
    .addLootTypeModifier([LootType.CHEST, LootType.UNKNOWN])
    .anyDimension(["minecraft:overworld", "minecraft:the_nether"])
    .modifyLoot(Ingredient.of(Object.keys(chestReplacementMap)), (/** @type {Internal.ItemStack} */ item) =>
      Item.of(chestReplacementMap[item.item.id], item.count)
    )
}
