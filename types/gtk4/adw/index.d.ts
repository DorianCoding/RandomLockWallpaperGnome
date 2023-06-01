// The mapping from @gi-types/adw1 to gi://Adw is somehow missing but exists in the real gnome environment
declare module 'gi://Adw' {
    export * from '@gi-types/adw1';

    // https://github.com/gi-ts/gtk4/tree/master/packages/%40gi-types/adw1
    // Manually extend Adw.EntryRow which is somehow missing from @gi-types/adw1
    // TODO: Remove this file and links to it once the original source updates to a recent Adw version.
    import Adw from 'gi://Adw';
    import Gtk from 'gi://Gtk';
    import GObject from 'gi://GObject';

    export module EntryRow {
        export interface ConstructorProperties extends Adw.PreferencesRow.ConstructorProperties {
            [key: string]: any;
            activates_default: boolean;
            attributes: unknown;
            enable_emoji_completion: boolean;
            input_hints: unknown;
            input_purpose: unknown;
            show_apply_button: boolean;
            test: string;
        }
    }

    export class EntryRow extends Adw.PreferencesRow implements Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.Editable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<EntryRow>;

        constructor(properties?: Partial<EntryRow.ConstructorProperties>, ...args: any[]);
        _init(properties?: Partial<EntryRow.ConstructorProperties>, ...args: any[]): void;

        // Properties
        get activates_default(): boolean;
        set activates_default(val: boolean);
        get attributes(): unknown;
        set attributes(val: unknown);
        get enable_emoji_completion(): boolean;
        set enable_emoji_completion(val: boolean);
        get input_hints(): unknown;
        set input_hints(val: unknown);
        get input_purpose(): unknown;
        set input_purpose(val: unknown);
        get show_apply_button(): boolean;
        set show_apply_button(val: boolean);
        get text(): string;
        set text(val: string);

        static ['new'](): EntryRow;

        add_prefix(val: Gtk.Widget): void;
        add_suffix(val: Gtk.Widget): void;
        remove(val: Gtk.Widget): void;

        // autogenerated:

        cursor_position: number;
        cursorPosition: number;
        editable: boolean;
        enable_undo: boolean;
        enableUndo: boolean;
        max_width_chars: number;
        maxWidthChars: number;
        selection_bound: number;
        selectionBound: number;
        width_chars: number;
        widthChars: number;
        xalign: number;
        delete_selection(): void;
        delete_text(start_pos: number, end_pos: number): void;
        finish_delegate(): void;
        get_alignment(): number;
        get_chars(start_pos: number, end_pos: number): string;
        get_delegate(): Gtk.EditablePrototype | null;
        get_editable(): boolean;
        get_enable_undo(): boolean;
        get_max_width_chars(): number;
        get_position(): number;
        get_selection_bounds(): [boolean, number, number];
        get_text(): string;
        get_width_chars(): number;
        init_delegate(): void;
        insert_text(text: string, length: number, position: number): number;
        select_region(start_pos: number, end_pos: number): void;
        set_alignment(xalign: number): void;
        set_editable(is_editable: boolean): void;
        set_enable_undo(enable_undo: boolean): void;
        set_max_width_chars(n_chars: number): void;
        set_position(position: number): void;
        set_text(text: string): void;
        set_width_chars(n_chars: number): void;
        vfunc_changed(): void;
        vfunc_delete_text(start_pos: number, end_pos: number): void;
        vfunc_do_delete_text(start_pos: number, end_pos: number): void;
        vfunc_do_insert_text(text: string, length: number, position: number): number;
        vfunc_get_delegate(): Gtk.EditablePrototype | null;
        vfunc_get_selection_bounds(): [boolean, number, number];
        vfunc_get_text(): string;
        vfunc_insert_text(text: string, length: number, position: number): number;
        vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
    }
}

// extend gi imports interface with adw
// https://github.com/gi-ts/environment#importsgi
declare interface GjsGiImports {
    Adw: typeof import('gi://Adw');
}
