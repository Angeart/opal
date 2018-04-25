const bnf = require('bnf');
const fs = require('fs');
const read = require('readline-sync');
const { promisify, inspect } = require('util');
function create_ast(token) {
    if(token.value.trim().length == 0)return null;
    let tree = {};
    tree.name = token.name;
    tree.value = token.value;
    tree.children = [];
    for(let child of token.tokens) {
        let child_tree = create_ast(child);
        if(child_tree == null)continue;
        tree.children.push(child_tree);
    }
    return tree;
}
(async () => {
    let compiler = new bnf.Compiler();
    //let rule_path = read.questionPath('input rule file ');
    let rule_path = process.argv[2];
    let rule = await promisify(fs.readFile)(rule_path, { encoding: 'utf8' });
    compiler.AddLanguage(rule,'test');
    // compiler.SetRuleEvents({
    //     evaluation(token) {
    //         console.log(token.value);
    //         console.log("eval", eval(token.value));
    //     }
    // });
    console.info('compiled');
    // let input = read.question('> ');
    let input = 'hoge[pat]( arg : int ) : null { test }';
    let result = compiler.ParseScript(input.trim());
    let ast = create_ast(result.rootToken);
    console.log(inspect(ast,false,null));
})();