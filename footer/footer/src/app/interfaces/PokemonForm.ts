export interface ResponsePokemonForm {
  form_name: string;
  form_names: any[];
  form_order: number;
  id: number;
  is_battle_only: boolean;
  is_default: boolean;
  is_mega: boolean;
  name: string;
  names: any[];
  order: number;
  pokemon: PokemonClass;
  sprites: Sprites;
  types: Type[];
  version_group: PokemonClass;
}

interface PokemonClass {
  name: string;
  url: string;
}

interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

interface Type {
  slot: number;
  type: PokemonClass;
}
