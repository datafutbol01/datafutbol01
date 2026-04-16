// Mapeo inicial de competiciones solicitadas a sus futuros IDs de API-Football. 
// Estos IDs numéricos corresponden a la base de datos oficial de la API.

export const TARGET_LEAGUES = {
    // === ARGENTINA ===
    ARGENTINA_PRIMERA: 128,          // Liga Profesional Argentina
    ARGENTINA_PRIMERA_NACIONAL: 129, // Primera B Nacional (B)
    ARGENTINA_B_METRO: 131,          // Primera B Metropolitana (C)
    ARGENTINA_PRIMERA_C: 132,        // Primera C (D)
    ARGENTINA_COPA: 130,             // Copa Argentina
    
    // === INGLATERRA ===
    ENG_PREMIER: 39,                 // Premier League (A)
    ENG_CHAMPIONSHIP: 40,            // Championship (B)
    ENG_LEAGUE_ONE: 41,              // League One (C)
    ENG_LEAGUE_TWO: 42,              // League Two (D)
    ENG_FA_CUP: 45,                  // FA Cup
    ENG_EFL_CUP: 48,                 // Carabao Cup (EFL Cup)
    ENG_COMMUNITY_SHIELD: 528,       // Community Shield
    
    // === FRANCIA ===
    FRA_LIGUE_1: 61,                 // Ligue 1
    FRA_LIGUE_2: 62,                 // Ligue 2
    FRA_COPA: 66,                    // Coupe de France
    
    // === ALEMANIA ===
    GER_BUNDESLIGA: 78,              // Bundesliga
    GER_2_BUNDESLIGA: 79,            // 2. Bundesliga
    GER_POKAL: 81,                   // DFB Pokal
    
    // === ITALIA ===
    ITA_SERIE_A: 135,                // Serie A
    ITA_SERIE_B: 136,                // Serie B
    ITA_COPPA: 137,                  // Coppa Italia
    
    // === ESPAÑA ===
    ESP_LALIGA: 140,                 // La Liga
    ESP_SEGUNDA: 141,                // LaLiga 2
    ESP_COPA_DEL_REY: 143,           // Copa del Rey
    
    // === RESTO DE EUROPA ===
    POR_PRIMEIRA: 94,                // Primeira Liga (Portugal)
    NED_EREDIVISIE: 88,              // Eredivisie (Holanda)
    SCO_PREMIERSHIP: 179,            // Premiership (Escocia)
    BEL_PRO_LEAGUE: 144,             // Jupiler Pro League (Bélgica)
    
    // === AMERICA ===
    BRA_SERIE_A: 71,                 // Brasileirao Serie A
    URU_PRIMERA: 268,                // Primera División (Uruguay)
    COL_PRIMERA: 239,                // Primera A (Colombia)
    PAR_PRIMERA: 252,                // Primera División (Paraguay)
    PER_PRIMERA: 281,                // Liga 1 (Perú)
    MEX_LIGA_MX: 262,                // Liga MX (México)
    USA_MLS: 253,                    // MLS (USA)

    // === MUNDIALES ===
    WORLD_CUP: 1                     // FIFA World Cup
};

// Generamos el string de IDs unidos por guiones que requiere API-Football (ej: "39-140-128...")
export const getActiveLeaguesString = () => {
    return Object.values(TARGET_LEAGUES).join('-');
};
