use std::{collections::HashMap};


fn main() {
    let mut args: HashMap<String, String> = HashMap::new();

    let cmd_args = std::env::args();

    if cmd_args.len() > 1 {
        println!("You need to at least provide a input file to assemble!\n");
        println!("Usage: asm --input=<input file>\n");

        println!("Possible Arguments:");
        println!("\t--input=<input file>");
        println!("\t--output=<optional output>");
    }

    cmd_args.into_iter().for_each(|element| {
        let split: Vec<&str> = element.trim_start_matches("--").split("=").collect();
        
        if split.len() != 2 {
            println!("Failed parsing command line arguments! '{}' is not formatted correctly.", element);

            std::process::exit(-1);
        }

        let key = split[0];
        let value = split[1];

        args.insert(key.to_string(), value.to_string());
    });

    
}
