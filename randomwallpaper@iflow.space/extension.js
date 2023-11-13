//self
const Self = imports.misc.extensionUtils.getCurrentExtension();
const WallpaperController = Self.imports.wallpaperController;
const RandomWallpaperMenu = Self.imports.randomWallpaperMenu;
const LoggerModule = Self.imports.logger;

const Timer = Self.imports.timer;

let wallpaperController;
let panelMenu;
let logger;
const UnlockDialog = imports.ui.unlockDialog
function init(metaData) { }

function enable() {
	// enable Extension
	logger = new LoggerModule.Logger("RWG3", "Main");
	wallpaperController = new WallpaperController.WallpaperController();

	logger.info("Enable extension.");
	panelMenu = new RandomWallpaperMenu.RandomWallpaperMenu(wallpaperController);
	panelMenu.init();
	if (wallpaperController._settings.get('change-lock-screen', 'boolean')) {
		UnlockDialog.UnlockDialog.prototype._showClock = wallpaperController._showClockNew;
		UnlockDialog.UnlockDialog.prototype._showPrompt = wallpaperController._showPromptNew;
	} else {
		logger.warn("Value is");
	}
	if (Main.screenShield._dialog)
		Main.screenShield._dialog._updateBackgrounds();
	this.enabled = true;
}

function disable() {
	// disable Extension
	logger.info("Disable extension.");
	panelMenu.cleanup();

	// destroy timer singleton
	Timer.AFTimerDestroySingleton();
	if (wallpaperController._settings.get('change-lock-screen', 'boolean')) {
		UnlockDialog.UnlockDialog.prototype._showClock = wallpaperController._showClockNew;
		UnlockDialog.UnlockDialog.prototype._showPrompt = wallpaperController._showPromptNew;
	}
	// clear references
	wallpaperController = null;
	panelMenu = null;
	logger = null;

	if (Main.screenShield._dialog)
		Main.screenShield._dialog._updateBackgrounds();

	this.enabled = false;
}
